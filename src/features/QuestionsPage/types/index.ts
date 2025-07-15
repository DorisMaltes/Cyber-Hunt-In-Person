export type Difficulty = "easy" | "hard";
export type QuestionType = {
  id: string;
  question_text: string;
  options: string[];
  correct_answer: string;
  points_correct: number;
  points_incorrect: number;
};

export type QuizSummaryItem = {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  points: number;
};

export type BoothProgress = {
  booth_id: string;
  score_obtained: number;
  time_taken: number;
  visited: boolean;
} | null;