import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { collection, getDocs, setDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";
import type { Difficulty, QuestionType, QuizSummaryItem } from "../types";

export const useQuiz = (boothId: string, difficulty: Difficulty | null) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  // Fetch questions based on difficulty
  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions", boothId, difficulty],
    queryFn: async () => {
      if (!difficulty) return [];
      const questionsRef = collection(db, "booths", boothId, `questions_${difficulty}`);
      const questionsSnap = await getDocs(questionsRef);
      return questionsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as QuestionType[];
    },
    enabled: !!difficulty && !!boothId,
    onSuccess: (data) => {
      if (data.length > 0 && !startTime) {
        setStartTime(Date.now());
      }
    },
  });

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime && questions && currentQuestionIndex < questions.length) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, questions, currentQuestionIndex]);

  // Mutation to save progress
  const { mutate: saveProgress } = useMutation({
    mutationFn: async ({ score, time }: { score: number; time: number }) => {
      if (!userId) throw new Error("User not authenticated");
      
      const userRef = doc(db, "users", userId);
      const progressRef = doc(db, "users", userId, "user_booth_progress", boothId);

      // Save individual progress
      await setDoc(progressRef, {
        booth_id: boothId,
        score_obtained: score,
        time_taken: time,
        visited: true,
      });

      // Update user's total score and visited booths
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        await updateDoc(userRef, {
          score: (userData.score || 0) + score,
          total_time: (userData.total_time || 0) + time,
          visited_booths: userData.visited_booths?.includes(boothId)
            ? userData.visited_booths
            : [...(userData.visited_booths || []), boothId],
        });
      }
    },
  });

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const calculateResults = (): { score: number; summary: QuizSummaryItem[] } => {
    if (!questions) return { score: 0, summary: [] };

    let totalScore = 0;
    const summary = questions.map((q) => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correct_answer;
      const points = isCorrect ? q.points_correct : q.points_incorrect;
      totalScore += points;

      return {
        question: q.question_text,
        userAnswer: userAnswer || "No answer",
        correctAnswer: q.correct_answer,
        isCorrect,
        points,
      };
    });

    return { score: totalScore, summary };
  };

  return {
    questions,
    isLoading,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    handleOptionSelect,
    elapsedTime,
    saveProgress,
    calculateResults,
  };
};