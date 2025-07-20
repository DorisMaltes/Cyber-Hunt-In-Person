import type { QuizSummary as QuizSummaryType } from "../types";
import ImageButton from "../../../components/ImageButton";
import HomeButton from "../../../assets/buttons/HomeButton.png";

interface QuizSummaryProps {
    score: number;
    elapsedTime: number;
    summary: QuizSummaryType[];
    onGoHome: () => void;
    savingProgress: boolean;
}

export const QuizSummary = ({
  score,
  elapsedTime,
  summary,
  onGoHome,
  savingProgress,
}: QuizSummaryProps) => {
  return (
    <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
      <h2 className="text-white font-game text-3xl text-center">
        Quiz Summary
      </h2>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full">
        <div className="text-center mb-6">
          <p className="text-white font-game text-2xl">
            Total Score: {score}
          </p>
          <p className="text-white font-sourceCodeFont text-lg">
            Time: {elapsedTime} seconds
          </p>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {summary.map((item, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                item.isCorrect ? "bg-green-500/20" : "bg-red-500/20"
              }`}
            >
              <p className="text-white font-game text-sm mb-2">
                {item.question}
              </p>
              <p className="text-white font-sourceCodeFont text-xs">
                Your answer: {item.userAnswer}
              </p>
              <p className="text-white font-sourceCodeFont text-xs">
                Correct answer: {item.correctAnswer}
              </p>
              <p
                className={`font-sourceCodeFont text-xs font-bold ${
                  item.isCorrect ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.isCorrect ? "Correct" : "Incorrect"} (Points: {item.points})
              </p>
            </div>
          ))}
        </div>
      </div>

      <ImageButton
        image={HomeButton}
        onClick={onGoHome}
        disabled={savingProgress}
        className="w-[200px] h-[60px]"
      />
      
    {savingProgress && (
        <p className="text-white font-sourceCodeFont text-sm">
          Saving progress...
        </p>
      )}
    </div>
  );
}; 