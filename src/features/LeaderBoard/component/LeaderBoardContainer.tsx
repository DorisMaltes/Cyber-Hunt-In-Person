//assets
import YellowCard from "../../../assets/imgs/YellowCardComponent.png";

export default function LeaderBoardContainer() {
  return (
    <div className="relative w-fit h-fit">
      <img src={YellowCard} alt="Yellow Card" className="w-full h-auto" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white w-48 h-72 flex justify-center ">
            <p className="text-[#7920FF] font-sourceCodeFont text-xl">Lista de usuarios</p>
        </div>
      </div>
    </div>
  );
}

