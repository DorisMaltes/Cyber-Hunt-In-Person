import { useState, useEffect } from "react";
import BackgroundMobile from "../../../layouts/BackgroundMobile";
import Footer from "../../../layouts/footerDektop";
import BackgroundMusic from "../../../components/BackgroundMusic";
import ImageButton from "../../../components/ImageButton";
import HomeButton from "../../../assets/buttons/HomeButton.png";
import { useGame } from "../hooks/useGame";

interface TicTacToeProps {
  boothId: string;
}

export const TicTacToe = ({ boothId }: TicTacToeProps) => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameResult, setGameResult] = useState<string | null>(null);

  const { handleGoHome, saveGameResult, loadingProgress, progressData } = useGame(boothId, "tictactoe");

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Check for winner or tie
  useEffect(() => {
    const checkWinner = (newBoard: (string | null)[]) => {
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
          return newBoard[a];
        }
      }
      if (!newBoard.includes(null)) return "Tie";
      return null;
    };

    const winner = checkWinner(board);
    if (winner) {
      setGameResult(winner);
    } else if (!isPlayerTurn) {
      machineMove();
    }
  }, [board, isPlayerTurn]);

  const handleCellClick = (index: number) => {
    if (!isPlayerTurn || board[index] || gameResult) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const machineMove = () => {
    const emptyIndices = board.map((val, idx) => (val === null ? idx : null)).filter(val => val !== null);
    if (emptyIndices.length > 0) {
      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      const newBoard = [...board];
      newBoard[randomIndex] = "O";
      setTimeout(() => {
        setBoard(newBoard);
        setIsPlayerTurn(true);
      }, 500);
    }
  };

  const handleEndGame = () => {
    let finalScore = 0;
    if (gameResult === "X") finalScore = 10; // Win
    else if (gameResult === "O") finalScore = -5; // Lose
    // Tie: 0 points

    saveGameResult({ finalScore });
  };

  useEffect(() => {
    if (gameResult) handleEndGame();
  }, [gameResult]);

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
            Tic Tac Toe
          </h2>
          
          {/* Game Board */}
          <div className="grid grid-cols-3 gap-2 bg-white/20 backdrop-blur-sm rounded-lg p-4">
            {board.map((cell, index) => (
              <div
                key={index}
                onClick={() => handleCellClick(index)}
                className={`w-20 h-20 bg-white/30 backdrop-blur-sm rounded-lg flex justify-center items-center text-3xl font-game cursor-pointer transition-all hover:bg-white/50 ${
                  cell ? 'text-white' : 'text-transparent'
                }`}
              >
                {cell}
              </div>
            ))}
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
                    {gameResult === "Tie" 
                      ? "It's a Tie!" 
                      : gameResult === "X" 
                        ? "You Won! 🎉" 
                        : "You Lost! 😔"
                    }
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-white font-sourceCodeFont text-lg">
                      {gameResult === "Tie" 
                        ? "Points: 0" 
                        : gameResult === "X" 
                          ? "Points: +10" 
                          : "Points: -5"
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

          {/* Turn Indicator */}
          {!gameResult && (
            <p className="text-white font-sourceCodeFont text-lg">
              {isPlayerTurn ? "Your turn (X)" : "Computer's turn (O)"}
            </p>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}; 