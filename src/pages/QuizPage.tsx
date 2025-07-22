import { useSearchParams } from "react-router-dom";
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";
import BackgroundMusic from "../components/BackgroundMusic";
import { useQuiz } from "../features/Quiz";
import {
  DifficultySelector,
  QuizQuestionCard,
  QuizSummary,
  AlreadyCompleted,
  QuizTimer,
} from "../features/Quiz";

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const boothId = searchParams.get("boothId");

  if (!boothId) {
    return (
      <div className="h-svh w-svw flex items-center justify-center">
        <p className="text-white font-game text-2xl">No booth ID provided</p>
      </div>
    );
  }

  const {
    // Data
    boothData,
    progressData,
    currentQuestion,
    
    // State
    difficulty,
    currentQuestionIndex,
    answers,
    showSummary,
    score,
    summary,
    elapsedTime,
    
    // Loading states
    loadingBooth,
    loadingProgress,
    loadingQuestions,
    savingProgress,
    
    // Handlers
    handleSelectDifficulty,
    handleOptionSelect,
    handleNext,
    handlePrev,
    handleFinishQuiz,
    handleGoHome,
    
    // Computed values
    totalQuestions,
    isLastQuestion,
    isFirstQuestion,
    hasAnsweredCurrent,
  } = useQuiz(boothId);

  return (
    <div className="h-svh w-svw">
      <BackgroundMobile />
      <Footer fixedBottom={false} />
      
      <div className="h-svh w-svw flex flex-col items-center justify-between px-4 relative z-10 gap-4">
        {/**<BackgroundMusic iconSize="w-8 h-8" />**/}
        
        {/* Timer - only show when quiz is active */}
        {difficulty && currentQuestion && (
          <div className="w-full pt-5 flex justify-center">
            <QuizTimer elapsedTime={elapsedTime} />
          </div>
        )}

        {/* Loading states */}
        {(loadingBooth || loadingProgress) && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-white font-game text-2xl">Loading booth...</p>
          </div>
        )}

        {/* Already completed - only show if not in summary state */}
        {!loadingProgress && progressData && !showSummary && (
          <AlreadyCompleted 
            progressData={progressData} 
            onGoHome={handleGoHome} 
          />
        )}

        {/* Quiz summary */}
        {showSummary && (
          <QuizSummary
            score={score}
            elapsedTime={elapsedTime}
            summary={summary}
            onGoHome={handleGoHome}
            savingProgress={savingProgress}
          />
        )}

        {/* Active quiz */}
        {!loadingBooth && !loadingProgress && !progressData && !showSummary && boothData && (
          <>
            {!difficulty && boothData.type === "questions" && (
              <div className="flex flex-col items-center gap-6 pt-16">
                <p className="text-white font-game text-xl text-center">
                  Booth {boothData.type}
                </p>

                <h1 className="text-white font-game text-4xl text-center">
                  {boothData.name}
                </h1>
                
                
                <DifficultySelector
                  onSelectDifficulty={handleSelectDifficulty}
                  loading={loadingQuestions}
                />
              </div>
            )}

            {difficulty && currentQuestion && (
              <QuizQuestionCard
                question={currentQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                onOptionSelect={handleOptionSelect}
                onNext={handleNext}
                onPrev={handlePrev}
                isFirstQuestion={isFirstQuestion}
                isLastQuestion={isLastQuestion}
                onFinish={handleFinishQuiz}
                currentQuestionNumber={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
              />
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
} 