import { useSearchParams } from "react-router-dom";
import { Roulette } from "../features/Random";

export default function RandomPage() {
  const [searchParams] = useSearchParams();
  const boothId = searchParams.get("boothId");
  const randomType = window.location.pathname.split("/").pop(); // Gets "roulette" from "/random/roulette"

  if (!boothId) {
    return (
      <div className="h-svh w-svw flex items-center justify-center">
        <p className="text-white font-game text-2xl">No booth ID provided</p>
      </div>
    );
  }

  if (!randomType) {
    return (
      <div className="h-svh w-svw flex items-center justify-center">
        <p className="text-white font-game text-2xl">No random type specified</p>
      </div>
    );
  }

  // Route to specific random activity based on randomType
  switch (randomType) {
    case "roulette":
      return <Roulette boothId={boothId} />;
    default:
      return (
        <div className="h-svh w-svw flex items-center justify-center">
          <p className="text-white font-game text-2xl">Unknown random type: {randomType}</p>
        </div>
      );
  }
} 