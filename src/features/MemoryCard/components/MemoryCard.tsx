import { useState, useEffect } from "react";
import BackgroundMobile from "../../../layouts/BackgroundMobile";
import Footer from "../../../layouts/footerDektop";
import BackgroundMusic from "../../../components/BackgroundMusic";
import ImageButton from "../../../components/ImageButton";
import HomeButton from "../../../assets/buttons/HomeButton.png";
import { useMemoryCard } from "../hooks/useMemoryCard";

interface MemoryCardProps {
  boothId: string;
}

// Configuración de imágenes/símbolos - fácil de cambiar por imágenes reales
const CARD_SYMBOLS = [
  "🦠", "👾", "💻", "🛜", "🔐"
];

// Función para crear pares de cartas
const createCardPairs = () => {
    const cards: Array<{ id: number; symbol: string; isFlipped: boolean; isMatched: boolean }> = [];
    let id = 1;
  
  CARD_SYMBOLS.forEach(symbol => {
    // Crear dos cartas con el mismo símbolo
    cards.push(
      { id: id++, symbol, isFlipped: false, isMatched: false },
      { id: id++, symbol, isFlipped: false, isMatched: false }
    );
  });
  
  // Mezclar las cartas
  return cards.sort(() => Math.random() - 0.5);
};

export const MemoryCard = ({ boothId }: MemoryCardProps) => {
  const [cards, setCards] = useState(createCardPairs());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameResult, setGameResult] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const { handleGoHome, saveGameResult, loadingProgress, progressData } = useMemoryCard(boothId, "memorycard");

  const totalPairs = CARD_SYMBOLS.length;

  // Initialize game
  useEffect(() => {
    if (!gameStarted) {
      setGameStarted(true);
    }
  }, [gameStarted]);

  // Check for game completion or game over
  useEffect(() => {
    if (matchedPairs === totalPairs && gameStarted) {
      setGameResult("won");
    } else if (moves > 10 && gameStarted) {
      setGameResult("lost");
    }
  }, [matchedPairs, totalPairs, moves, gameStarted]);

  const handleCardClick = (cardId: number) => {
    if (gameResult || flippedCards.length >= 2) return;

    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Update card state
    setCards(prevCards => 
      prevCards.map(c => 
        c.id === cardId ? { ...c, isFlipped: true } : c
      )
    );

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.symbol === secondCard.symbol) {
        // Match found
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              c.id === firstId || c.id === secondId 
                ? { ...c, isMatched: true, isFlipped: true }
                : c
            )
          );
          setMatchedPairs(prev => prev + 1);
          setFlippedCards([]);
        }, 500);
      } else {
        // No match - flip cards back
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(c => 
              c.id === firstId || c.id === secondId 
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleEndGame = () => {
    let finalScore = 0;
    if (gameResult === "won") {
      // Score based on moves (fewer moves = higher score)
      // Perfect game (5 moves) = 20 points, each extra move = -1 point
      finalScore = Math.max(5, 20 - Math.max(0, moves - totalPairs));
    } else if (gameResult === "lost") {
      // No points for losing
      finalScore = 0;
    }

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
            Memory Card Game
          </h2>
          
          {/* Game Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full text-center">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-white font-sourceCodeFont text-lg">Moves</p>
                <p className="text-white font-game text-xl">{moves}</p>
              </div>
              <div className="text-center">
                <p className="text-white font-sourceCodeFont text-lg">Pairs</p>
                <p className="text-white font-game text-xl">{matchedPairs}/{totalPairs}</p>
              </div>
            </div>
          </div>

          {/* Game Board */}
          <div className="grid grid-cols-5 gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            {cards.map(card => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`w-16 h-16 rounded-lg flex justify-center items-center text-3xl font-game cursor-pointer transition-all duration-300 ${
                  card.isFlipped || card.isMatched
                    ? 'bg-white/50 text-black'
                    : 'bg-white/30 text-white hover:bg-white/50'
                } ${card.isMatched ? 'opacity-75' : ''}`}
              >
                {card.isFlipped || card.isMatched ? card.symbol : '?'}
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
                  {gameResult === "won" ? (
                    <>
                      <h3 className="text-white font-game text-2xl">
                        You Won! 🎉
                      </h3>
                      
                      <div className="space-y-2">
                        <p className="text-white font-sourceCodeFont text-lg">
                        Moves used: {moves}
                        </p>
                        <p className="text-white font-sourceCodeFont text-lg">
                          Points: +{Math.max(5, 20 - Math.max(0, moves - totalPairs))}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-white font-game text-2xl">
                        Game Over! 😞
                      </h3>
                      
                      <div className="space-y-2">
                        <p className="text-white font-sourceCodeFont text-lg">
                          Moves used: {moves} (Limit: 10)
                        </p>
                        <p className="text-white font-sourceCodeFont text-lg">
                          Points: 0
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <ImageButton
                image={HomeButton}
                onClick={handleGoHome}
                className="w-[200px] h-[60px]"
              />
            </div>
          )}

          {/* Instructions */}
          {!gameResult && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full text-center">
              <p className="text-white font-sourceCodeFont text-lg">
                Find matching pairs by clicking on the cards!
              </p>
              <p className="text-white font-sourceCodeFont text-sm mt-2">
                You have 10 moves to complete the game!
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
