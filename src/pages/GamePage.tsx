import { useSearchParams } from "react-router-dom";
import { TicTacToe } from "../features/Game";

export default function GamePage() {
  const [searchParams] = useSearchParams();
  const boothId = searchParams.get("boothId");
  const gameType = searchParams.get("game");

  if (!boothId) {
    return (
      <div className="h-svh w-svw flex items-center justify-center">
        <p className="text-white font-game text-2xl">No booth ID provided</p>
      </div>
    );
  }

  if (!gameType) {
    return (
      <div className="h-svh w-svw flex items-center justify-center">
        <p className="text-white font-game text-2xl">No game type specified</p>
      </div>
    );
  }

  // Route to specific game based on gameType
  switch (gameType) {
    case "tictactoe":
      return <TicTacToe boothId={boothId} />;
    case "roulette":
      // TODO: Add roulette game component
      return (
        <div className="h-svh w-svw flex items-center justify-center">
          <p className="text-white font-game text-2xl">Roulette game coming soon!</p>
        </div>
      );
    default:
      return (
        <div className="h-svh w-svw flex items-center justify-center">
          <p className="text-white font-game text-2xl">Unknown game type: {gameType}</p>
        </div>
      );
  }
} 