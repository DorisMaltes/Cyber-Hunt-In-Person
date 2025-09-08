import { useState, useEffect } from "react";
import BackgroundMobile from "../../../layouts/BackgroundMobile";
import Footer from "../../../layouts/footerDektop";
import BackgroundMusic from "../../../components/BackgroundMusic";
import ImageButton from "../../../components/ImageButton";
import HomeButton from "../../../assets/buttons/HomeButton.png";
import { useHangman } from "../hooks/useHangman";
import { HangmanDrawing } from "./HangmanDrawing";

interface HangmanProps {
  boothId: string;
}

// Lista de palabras aleatorias para el juego
const WORDS = [
  "COMPUTER", "PROGRAMMING", "CYBERSECURITY", "ALGORITHM", "DATABASE",
  "NETWORK", "SOFTWARE", "HARDWARE", "INTERNET", "PASSWORD",
  "ENCRYPTION", "FIREWALL", "VIRUS", "MALWARE", "HACKER",
  "KEYBOARD", "MONITOR", "SERVER", "CLIENT", "PROTOCOL",
  "JAVASCRIPT", "PYTHON", "JAVA", "REACT", "NODEJS",
  "FRONTEND", "BACKEND", "API", "JSON", "HTML",
  "CSS", "GIT", "LINUX", "WINDOWS", "MACOS"
];

export const Hangman = ({ boothId }: HangmanProps) => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const { handleGoHome, saveGameResult, loadingProgress, progressData } = useHangman(boothId, "hangman");

  const maxWrongGuesses = 10;

  // Initialize game with random word
  useEffect(() => {
    if (!gameStarted) {
      const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
      setWord(randomWord);
      setGameStarted(true);
    }
  }, [gameStarted]);

  // Check game result
  useEffect(() => {
    if (!word || !gameStarted) return;

    const isWon = word.split('').every(letter => guessedLetters.includes(letter));
    const isLost = wrongGuesses >= maxWrongGuesses;

    if (isWon) {
      setGameResult("won");
    } else if (isLost) {
      setGameResult("lost");
    }
  }, [guessedLetters, wrongGuesses, word, gameStarted]);

  const handleLetterGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameResult) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const handleEndGame = () => {
    let finalScore = 0;
    if (gameResult === "won") {
      // Score based on remaining wrong guesses (more wrong guesses = lower score)
      finalScore = Math.max(5, 20 - wrongGuesses);
    } else if (gameResult === "lost") {
      finalScore = -2; // Small penalty for losing
    }

    saveGameResult({ finalScore });
  };

  useEffect(() => {
    if (gameResult) handleEndGame();
  }, [gameResult]);

  const getDisplayWord = () => {
    return word.split('').map(letter => 
      guessedLetters.includes(letter) ? letter : '_'
    ).join(' ');
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Show already completed message - only if not currently playing
  if (!loadingProgress && progressData && !gameResult) {
    return (
      <div className="h-svh w-svw">
        <BackgroundMobile />
        <Footer fixedBottom={false} />
        
        <div className="h-svh w-svw flex flex-col items-center justify-center px-4 relative z-10 gap-6">
          <BackgroundMusic iconSize="w-8 h-8" />
          
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <h2 className="text-white font-game text-3xl text-center">
              Game Already Completed
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full text-center">
              <p className="text-white font-game text-xl mb-4">
                You've already played this game!
              </p>
              
              <div className="space-y-2">
                <p className="text-white font-sourceCodeFont text-lg">
                  Points obtained: {progressData.score_obtained}
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

  // Loading state - only show if we're loading progress
  if (loadingProgress) {
    return (
      <div className="h-svh w-svw">
        <BackgroundMobile />
        <Footer fixedBottom={false} />
        
        <div className="h-svh w-svw flex flex-col items-center justify-center px-4 relative z-10">
          <BackgroundMusic iconSize="w-8 h-8" />
          <p className="text-white font-game text-2xl">Loading game...</p>
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
          <h2 className="text-white font-game text-4xl text-center">
            Hangman
          </h2>
          
          {/* Hangman Drawing */}
          <HangmanDrawing wrongGuesses={wrongGuesses} maxWrongGuesses={maxWrongGuesses} />
          
          {/* Word Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full text-center">
            <p className="text-white font-sourceCodeFont text-2xl tracking-widest">
              {getDisplayWord()}
            </p>
          </div>

          {/* Game Result Summary */}
          {gameResult && (
            <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
              <h2 className="text-white font-game text-3xl text-center">
                Game Complete!
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full text-center">
                <div className="space-y-4">
                  <h3 className="text-white font-game text-2xl">
                    {gameResult === "won" 
                      ? "You Won! 🎉" 
                      : "You Lost! 😔"
                    }
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-white font-sourceCodeFont text-lg">
                      The word was: {word}
                    </p>
                    <p className="text-white font-sourceCodeFont text-lg">
                      {gameResult === "won" 
                        ? `Points: +${Math.max(5, 20 - wrongGuesses)}` 
                        : "Points: -2"
                      }
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
          )}

          {/* Alphabet Keyboard */}
          {!gameResult && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full">
              <p className="text-white font-sourceCodeFont text-lg text-center mb-4">
                Wrong guesses: {wrongGuesses}/{maxWrongGuesses}
              </p>
              
              <div className="grid grid-cols-6 gap-2">
                {alphabet.map(letter => (
                  <button
                    key={letter}
                    onClick={() => handleLetterGuess(letter)}
                    disabled={guessedLetters.includes(letter)}
                    className={`w-10 h-10 rounded-lg font-game text-lg transition-all ${
                      guessedLetters.includes(letter)
                        ? word.includes(letter)
                          ? 'bg-green-500/50 text-white cursor-not-allowed'
                          : 'bg-red-500/50 text-white cursor-not-allowed'
                        : 'bg-white/30 text-white hover:bg-white/50 cursor-pointer'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
