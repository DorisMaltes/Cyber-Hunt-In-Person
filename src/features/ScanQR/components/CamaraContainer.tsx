//assets
import YellowCard from "../../../assets/imgs/YellowCardComponent.png";

export default function CamaraContainer() {
  return (
    <div className="relative w-fit h-fit">
      <img src={YellowCard} alt="Yellow Card" className="w-full h-auto" />
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="text-black">The Camera Will Be Here :))</p>
      </div>
    </div>
  );
}

