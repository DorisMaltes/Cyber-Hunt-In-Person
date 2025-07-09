//asssets
import YellowCard from "../../../assets/imgs/YellowCardComponent.png";
import ImageButton from "../../../components/ImageButton";
import arrow from "../../../assets/imgs/flecha.png"

export default function LeaderBoardContainer() {
  const usuarios = ["Pedro", "Julian", "Juan Carlos", "Aldo", "Melissa", "Cecilia"];

  const listitems = usuarios.map((usuario, idx) => (
    <li key={idx}>{usuario}</li>
  ));

  return (
    <div className="">
      <div className="relative w-fit h-fit">
        <img src={YellowCard} alt="Yellow Card" className="w-full h-auto pb-2" />

        <div className="absolute inset-0 flex justify-center items-center m-10 flex-col pb-7">
          <div className="bg-white h-full w-full overflow-y-auto p-4 rounded-lg">
            <ol className="text-[#7920FF] list-decimal font-sourceCodeFont text-xl pl-10">
              {listitems}
            </ol>
          </div>
          <div>
            <p className="text-[#7920FF] font-game text-xl pt-3">1/1</p>
          </div>
          
        </div>
        
        <div className="flex flex-row justify-center gap-10">
            <ImageButton
              image={arrow}
              onClick={() => console.log("boton para atras")}
              size="w-14"
              className="aspect-square"
              
            >
            </ImageButton>
            
            <ImageButton
              image={arrow}
              onClick={() => console.log("boton para adelante")}
              size="w-14"
              className="scale-x-[-1]"
            >
            </ImageButton>
          </div>
      </div>
    </div>
    
  );
}
