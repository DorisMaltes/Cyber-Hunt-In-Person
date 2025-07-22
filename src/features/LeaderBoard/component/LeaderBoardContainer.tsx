// assets imports
import YellowCard from "../../../assets/imgs/YellowCardComponent.png";
import ImageButton from "../../../components/ImageButton";
import arrow from "../../../assets/imgs/flecha.png";

// logic imports
import { useState } from "react";
import { useLeaderboardData } from "../hooks/useLeaderBoardData";

const pageSize = 10;

export default function LeaderBoardContainer() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useLeaderboardData();

  
  if (isLoading) return <p className="text-white">Loading leaderboard...</p>;
  if (isError || !data) return <p className="text-red-500">Error loading leaderboard</p>;

  const { players, userId, userRank } = data;

  const totalPages = Math.ceil(players.length / pageSize);
  const pagePlayers = players.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-fit h-fit">
        <img src={YellowCard} alt="Yellow Card" className="w-full h-auto pb-2" />

        <div className="absolute inset-0 flex justify-center items-center m-10 flex-col pb-7">
          <div className="bg-white h-full w-full overflow-y-auto p-4 rounded-lg">
            <ol className="text-[#7920FF] list-decimal font-sourceCodeFont text-xl">
              {pagePlayers.map((player: any, index: number) => {
                const globalIndex = page * pageSize + index;
                const isCurrentUser = player.id === userId;

                return (
                  <li
                    key={player.id}
                    className={`mb-1 ${isCurrentUser ? "font-bold text-[#C88D00]" : ""} list-none`}
                  >
                    {globalIndex + 1}. {player.name || "Player"} — {player.score || 0} pts
                    {globalIndex === 0 && " 👑"}
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="text-[#7920FF] font-game text-xl pt-3">
            {page + 1} / {totalPages}
          </p>
        </div>

        {/* navigation buttons arrows imports from arrow import assets*/}
        <div className="flex flex-row justify-center gap-10 mt-3">
          <ImageButton
            image={arrow}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            size="w-14"
            className="aspect-square"
          />

          <ImageButton
            image={arrow}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            size="w-14 scale-x-[-1]"
            className="aspect-square"
          />
        </div>

        {/* Show Use'r Ranking if they are outside of the global */}
        {userRank && userRank > (page + 1) * pageSize && (
          <div className="mt-4 text-center bg-white rounded-lg px-4 py-2 text-[#7920FF] font-sourceCodeFont">
            🔍 Your position: {userRank}°
          </div>
        )}
      </div>
    </div>
  );
}
