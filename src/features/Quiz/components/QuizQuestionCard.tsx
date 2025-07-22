import type { Question } from "../types";
import purplerCard from "../../../assets/imgs/Cuadro-De-Contenido-morado.png";
import AquaPill from "../../../assets/imgs/AquaPill.png";
import arrow from "../../../assets/imgs/flecha.png";
import ImageButton from "../../../components/ImageButton";
import React, { useMemo } from "react";

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

// Helper function to determine pill size and font size based on max option length
function getPillAndFontSize(maxOptionLength: number) {
    // You can tweak these thresholds and sizes as needed
    if (maxOptionLength > 50) {
        // Very long
        return {
            width: "320px",
            height: "80px",
            fontSize: "0.85rem",
        };
    } else if (maxOptionLength > 32) {
        // Long
        return {
            width: "270px",
            height: "70px",
            fontSize: "1rem",
        };
    } else {
        // Default
        return {
            width: "230px",
            height: "64px",
            fontSize: "1.25rem",
        };
    }
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
    // Compute the max option length for this question
    const maxOptionLength = useMemo(
        () => Math.max(...question.options.map(opt => opt.length)),
        [question.options]
    );
    const { width, height, fontSize } = getPillAndFontSize(maxOptionLength);

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
            <div className="flex flex-col gap-4 w-full items-center">
            {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                return (
                <div
                    key={index}
                    style={{
                        backgroundImage: `url(${AquaPill})`,
                        width,
                        height,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        transition: "width 0.2s, height 0.2s, box-shadow 0.2s, border 0.2s",
                        border: isSelected ? "3px solid #FFD700" : "3px solid transparent",
                        boxShadow: isSelected
                            ? "0 0 0 4px rgba(255, 215, 0, 0.3)"
                            : "none",
                        borderRadius: "32px",
                    }}
                    className={`flex justify-center items-center cursor-pointer transition-all ${
                        isSelected ? "scale-105" : ""
                    }`}
                    onClick={() => onOptionSelect(option)}
                    tabIndex={0}
                    aria-pressed={isSelected}
                    role="button"
                >
                    <p
                        className="text-white font-game text-center px-2"
                        style={{
                            fontSize,
                            lineHeight: "1.1",
                            wordBreak: "break-word",
                            maxWidth: `calc(${width} - 24px)`,
                            whiteSpace: "pre-line",
                        }}
                    >
                        {option}
                    </p>
                </div>
            )})}
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