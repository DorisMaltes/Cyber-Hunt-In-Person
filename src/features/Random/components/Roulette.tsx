import { useState, useEffect } from "react";
import { SpinWheel } from "react-spin-wheel";
import "react-spin-wheel/dist/index.css";
import BackgroundMobile from "../../../layouts/BackgroundMobile";
import Footer from "../../../layouts/footerDektop";
import BackgroundMusic from "../../../components/BackgroundMusic";
import ImageButton from "../../../components/ImageButton";
import HomeButton from "../../../assets/buttons/HomeButton.png";
import { useRandom } from "../hooks/useRandom";

interface RouletteProps {
  boothId: string;
}

export const Roulette = ({ boothId }: RouletteProps) => {
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const { handleGoHome, saveRandomResult, loadingProgress, progressData } = useRandom(boothId, "roulette");

  // Possible results that will appear on the visual wheel
  const possibleResults = ["+10", "+5", "-5", "-10"];

  useEffect(() => {
    // Check if user already played this booth
    if (!loadingProgress && progressData) {
      setAlreadyPlayed(true);
      setResult(progressData.score_obtained);
    }
  }, [loadingProgress, progressData]);

  const handleFinishSpin = (prizeStr: string) => {
    const prize = parseInt(prizeStr); // Convert "+10" or "-5" to number
    
    saveRandomResult({ finalScore: prize });
    setResult(prize); // Show the result
    setAlreadyPlayed(true); // Mark as played
  };

  // Show already completed message
  if (!loadingProgress && progressData && !result) {
    return (
      <div className="h-svh w-svw">
        <BackgroundMobile />
        <Footer fixedBottom={false} />
        
        <div className="h-svh w-svw flex flex-col items-center justify-center px-4 relative z-10 gap-6">
          <BackgroundMusic iconSize="w-8 h-8" />
          
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <h2 className="text-white font-game text-3xl text-center">
              Roulette Already Played
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full text-center">
              <p className="text-white font-game text-xl mb-4">
                You've already spun this roulette!
              </p>
              
              <div className="space-y-2">
                <p className="text-white font-sourceCodeFont text-lg">
                  Points obtained: {progressData.score_obtained > 0 ? `+${progressData.score_obtained}` : progressData.score_obtained}
                </p>
              </div>
            </div>

            <ImageButton
              image={HomeButton}
              onClick={handleGoHome}
              className="w-[200px] h-[60px]"
            />
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // Loading state
  if (loadingProgress) {
    return (
      <div className="h-svh w-svw">
        <BackgroundMobile />
        <Footer fixedBottom={false} />
        
        <div className="h-svh w-svw flex flex-col items-center justify-center px-4 relative z-10">
          <BackgroundMusic iconSize="w-8 h-8" />
          <p className="text-white font-game text-2xl">Loading roulette...</p>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-svh w-svw">
      <BackgroundMobile />
      <Footer fixedBottom={false} />
      
      <div className="h-svh w-svw flex flex-col items-center justify-between px-4 relative z-10 gap-4">
        <BackgroundMusic iconSize="w-8 h-8" />
        
        <div className="flex flex-col items-center gap-6 pt-8">
          <h1 className="text-white font-game text-4xl text-center">
            🎰 Spin the Roulette!
          </h1>

          {alreadyPlayed ? (
            // Show result after spinning
            <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
              <h2 className="text-white font-game text-3xl text-center">
                Roulette Complete!
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full text-center">
                <div className="space-y-4">
                  <h3 className="text-white font-game text-2xl">
                    Result: {result! > 0 ? `+${result}` : result} points
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-white font-sourceCodeFont text-lg">
                      {result! > 0 ? "🎉 Lucky spin!" : "😔 Better luck next time!"}
                    </p>
                  </div>
                </div>
              </div>

              <ImageButton
                image={HomeButton}
                onClick={handleGoHome}
                className="w-[200px] h-[60px]"
              />
            </div>
          ) : (
            // Show roulette wheel
            <div className="flex flex-col items-center gap-6">
              <p className="text-white font-sourceCodeFont text-xl text-center">
                Click the roulette to spin
              </p>
              
              <div className="max-w-[400px] mx-auto">
                <SpinWheel
                  items={possibleResults}
                  onFinishSpin={handleFinishSpin}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}; 