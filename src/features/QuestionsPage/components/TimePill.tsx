import AquaPill from "../../../assets/imgs/AquaPill.png";
import clock from "../../../assets/imgs/clock.png";

interface TimePillProps {
  time: number;
}

export default function TimePill({ time }: TimePillProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${AquaPill})`,
        width: "183px",
        height: "50px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center"
    >
      <div className="flex flex-row gap-3 items-center justify-center">
        <img src={clock} alt="clock" className="w-6 h-6" />
        <p className="text-purple-800 text-2xl font-game">{time}s</p>
      </div>
    </div>
  );
}