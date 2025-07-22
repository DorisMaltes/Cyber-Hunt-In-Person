
import YellowCard from "../../../assets/imgs/YellowCardComponent.png";

export default function SummaryContainer() {
  return (
    <div className="relative w-[320px] h-fit">
      {/* Imagen de fondo */}
      <img
        src={YellowCard}
        alt="Yellow Card"
        className="w-full h-auto block"
      />

      {/* Contenido centrado sobre la tarjeta */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-8 gap-4">

        {/* Texto Score */}
        <p className="text-white text-3xl font-game">Score:</p>

        {/* Cuadro blanco con los puntos */}
        <div
          className="w-[240px] h-[110px] bg-white rounded-[30px] shadow-lg flex items-center justify-center"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <p className="text-[#00C293] text-[42px] font-game">+20</p>
        </div>

        {/* Resultado final */}
        <p className="text-white text-[20px] font-game">You got: 4/5</p>
      </div>
    </div>
  );
}
