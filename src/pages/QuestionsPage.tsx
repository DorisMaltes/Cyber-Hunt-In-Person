// //Layout Imports
// import BackgroundMobile from "../layouts/BackgroundMobile";
// import Footer from "../layouts/footerDektop";
// // import BackgroundMusic from "../components/BackgroundMusic";

// //assets imports
// import submit from "../assets/buttons/SubmitButton.png"


// //component imports
// import TimePill from "../features/QuestionsPage/components/TimePill";
// import QuestionCard from "../features/QuestionsPage/components/QuestionCard";
// import ImageButton from "../components/ImageButton";


// export default function QuestionPage(){
//     return(
//         <div className="h-svh w-svw">
//             <BackgroundMobile/>

//             <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10 ">

//                 {/*component pill indicating the time the user is taking to response to the questions*/}
//                 <TimePill/>

//                 <QuestionCard/>

//                 <ImageButton
//                 image={submit}
//                 className="w-[260px] h-[72px]"
//                 to="/summaryPage"
//                 />


//             </div>

            
//             <Footer/>
//         </div>
//     );
// }


import { useSearchParams } from "react-router-dom";
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";
import {
  TimePill,
  QuestionCard,
  DifficultySelector,
  QuizSummary,
  useBoothData,
  useBoothProgress,
  useQuiz,
} from "../features/QuestionsPage";
import { getAuth } from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const [searchParams] = useSearchParams();
  const boothId = searchParams.get("boothId");
  const [difficulty, setDifficulty] = useState<"easy" | "hard" | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [quizResults, setQuizResults] = useState<{
    score: number;
    summary: QuizSummaryItem[];
  } | null>(null);

  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  // Fetch booth data and progress
  const { data: boothData } = useBoothData(boothId || "");
  const { data: progressData } = useBoothProgress(boothId || "", userId || "");

  // Quiz logic
  const {
    questions,
    isLoading,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    handleOptionSelect,
    elapsedTime,
    saveProgress,
    calculateResults,
  } = useQuiz(boothId || "", difficulty);

  const handleFinishQuiz = () => {
    const results = calculateResults();
    setQuizResults(results);
    setShowSummary(true);
    saveProgress({ score: results.score, time: elapsedTime });
  };

  // If already completed
  if (progressData?.visited) {
    return (
      <div className="h-svh w-svw bg-purple-900 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Este booth ya fue completado
          </h2>
          <p className="text-lg mb-2">
            Puntos obtenidos: {progressData.score_obtained}
          </p>
          <p className="text-lg mb-6">
            Tiempo tomado: {progressData.time_taken} segundos
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Regresar al Home
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (!boothData || isLoading) {
    return (
      <div className="h-svh w-svw bg-purple-900 flex items-center justify-center">
        <p className="text-white text-xl">Cargando...</p>
      </div>
    );
  }

  // Summary view
  if (showSummary && quizResults) {
    return (
      <div className="h-svh w-svw">
        <BackgroundMobile />
        <div className="h-svh w-svw flex items-center justify-center px-4 relative z-10">
          <QuizSummary
            summary={quizResults.summary}
            score={quizResults.score}
            time={elapsedTime}
          />
        </div>
        <Footer />
      </div>
    );
  }

  // Difficulty selection
  if (!difficulty) {
    return (
      <div className="h-svh w-svw">
        <BackgroundMobile />
        <div className="h-svh w-svw flex items-center justify-center px-4 relative z-10">
          <DifficultySelector onSelect={setDifficulty} />
        </div>
        <Footer />
      </div>
    );
  }

  // Quiz in progress
  const currentQuestion = questions?.[currentQuestionIndex];
  return (
    <div className="h-svh w-svw">
      <BackgroundMobile />

      <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10">
        <TimePill time={elapsedTime} />

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id]}
            onAnswerSelect={(option) => handleOptionSelect(currentQuestion.id, option)}
            onPrev={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
            onNext={() =>
              setCurrentQuestionIndex((prev) =>
                Math.min(questions.length - 1, prev + 1)
              )
            }
            currentIndex={currentQuestionIndex}
            totalQuestions={questions?.length || 0}
            onSubmit={handleFinishQuiz}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}