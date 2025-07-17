import { useUserData } from "..";

type UserData = {
  name: string;
  score: number;
  visited_booths?: any[];
};

export default function UserInfo() {
  const { data, isLoading, isError } = useUserData();

  if (isLoading) return <p className="text-white font-game text-xl">Loading...</p>;
  if (isError || !data || typeof data.name !== "string" || typeof data.score !== "number") {
    return <p className="text-red-500 font-game">Error loading user data</p>;
  }

  const { name, score, visited_booths = [] } = data as UserData;

  return (
    <>
      <div className="relative text-center">
        <p className="text-[#37E4B9] font-game text-[28px] absolute bottom-[3.5px] font-normal">
          Hi, {name}!
        </p>
        <p className="text-white font-game text-[28px] font-normal">Hi, {name}!</p>
      </div>

      <div className="text-center">
        <p className="text-white font-game text-xl pb-2">Points</p>
        <p className="text-white font-sourceCodeFont text-5xl font-bold">{score}</p>
      </div>

      <div className="text-center">
        <p className="text-white font-game text-xl pb-2">Booths Visited</p>
        <p className="text-white font-sourceCodeFont text-5xl font-bold">
          {visited_booths.length}/5
        </p>
      </div>
    </>
  );
}