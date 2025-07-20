import type { Question } from "../types";
import purplerCard from "../../../assets/imgs/Cuadro-De-Contenido-morado.png";
import AquaPill from "../../../assets/imgs/AquaPill.png";
import arrow from "../../../assets/imgs/flecha.png";
import ImageButton from "../../../components/ImageButton";

interface QuizQuestionCardProps {
    question: Question;
    selectedAnswer: string | undefined;
    onOptionSelect: (option: string) => void;
    onNext: () => void;
    onPrev: () => void;
    isFirstQuestion: boolean;
    isLastQuestion: boolean;
    onFinish: () => void;
    currentQuestionNumber: number;
    totalQuestions: number;
}

export const QuizQuestionCard = ({
    question,
    selectedAnswer,
    onOptionSelect,
    onNext,
    onPrev,
    isFirstQuestion,
    isLastQuestion,
    onFinish,
    currentQuestionNumber,
    totalQuestions,
}: QuizQuestionCardProps) => {

    return (
        <div>
        <div
            style={{
            backgroundImage: `url(${purplerCard})`,
            width: "315px",
            height: "550px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            }}
            className="flex flex-col items-center justify-between py-8"
        >
            {/* Question */}
            <div className="bg-[white] font-game text-[#631BD8] p-4 max-w-[280px] text-center">
            <p>{question.question_text}</p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-4">
            {question.options.map((option, index) => (
                <div
                key={index}
                style={{
                    backgroundImage: `url(${AquaPill})`,
                    width: "230px",
                    height: "64px",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className={`flex justify-center items-center cursor-pointer transition-all ${
                    selectedAnswer === option ? "scale-105" : ""
                }`}
                onClick={() => onOptionSelect(option)}
                >
                <p className="text-white font-game text-center px-2">{option}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-row justify-center gap-24 mt-4">
            <ImageButton
            image={arrow}
            onClick={onPrev}
            disabled={isFirstQuestion}
            size="w-14"
            className="aspect-square"
            />

            {isLastQuestion ? (
            <ImageButton
                image={arrow}
                onClick={onFinish}
                disabled={!selectedAnswer}
                size="w-14"
                className="scale-x-[-1]"
            />
            ) : (
            <ImageButton
                image={arrow}
                onClick={onNext}
                disabled={!selectedAnswer}
                size="w-14"
                className="scale-x-[-1]"
            />
            )}
        </div>

        {/* Question counter */}
        <p className="text-white font-sourceCodeFont text-lg text-center mt-2">
            Question {currentQuestionNumber} of {totalQuestions}
        </p>
        </div>
    );
}; 