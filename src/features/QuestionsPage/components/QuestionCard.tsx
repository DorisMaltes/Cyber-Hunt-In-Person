import type { QuestionType } from "../types";
import AquaPill from "../../../assets/imgs/AquaPill.png";
import ImageButton from "../../../components/ImageButton";
import arrow from "../../../assets/imgs/flecha.png";
import purplerCard from "../../../assets/imgs/Cuadro-De-Contenido-morado.png";

interface QuestionCardProps {
  question: QuestionType;
  selectedAnswer?: string;
  onAnswerSelect: (option: string) => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalQuestions: number;
  onSubmit: () => void;
}

export default function QuestionCard(){
    

    return(

        <div>
            <div style={{ 
                backgroundImage: `url(${purplerCard})`,
                width: "315px",
                height: "550px",
                backgroundSize: "contain", // o "100% 100%" si quieres que llene exactamente
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"}}
                
                className="flex flex-col items-center justify-between py-8">
            
                {/*QUESTION :)*/}
                <div className="bg-[white] font-game text-[#631BD8] p-4">
                    <p>holiws</p>
                </div>
            
            
                {/*option Question*/}
                <div className="flex flex-col gap-8">
                    <div style={{ 
                    backgroundImage: `url(${AquaPill})`,
                    width: "230px",
                    height: "64px",
                    backgroundSize: "contain", // o "100% 100%" si quieres que llene exactamente
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}
                    className="flex justify-center items-center">
                        <p className="text-white font-game">holiws</p>
                    </div>
            
                    <div style={{ 
                    backgroundImage: `url(${AquaPill})`,
                    width: "230px",
                    height: "64px",
                    backgroundSize: "contain", // o "100% 100%" si quieres que llene exactamente
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}
                    className="flex justify-center items-center">
                        <p>holiws</p>
                    </div>
                    <div style={{ 
                    backgroundImage: `url(${AquaPill})`,
                    width: "230px",
                    height: "64px",
                    backgroundSize: "contain", // o "100% 100%" si quieres que llene exactamente
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}
                    className="flex justify-center items-center">
                        <p>holiws</p>
                    </div>
                    <div style={{ 
                    backgroundImage: `url(${AquaPill})`,
                    width: "230px",
                    height: "64px",
                    backgroundSize: "contain", // o "100% 100%" si quieres que llene exactamente
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"}}
                    className="flex justify-center items-center">
                        <p>holiws</p>
                    </div>
                </div>
               
            
            
            
            </div>

        <div className="flex flex-row justify-center gap-24">
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

        {/* Options */}
        <div className="flex flex-col gap-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              style={{
                backgroundImage: `url(${AquaPill})`,
                width: "230px",
                height: "64px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={`flex justify-center items-center ${
                selectedAnswer === option ? "ring-4 ring-yellow-400" : ""
              }`}
              onClick={() => onAnswerSelect(option)}
            >
              <p className="text-white font-game text-center px-4">{option}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center gap-24 mt-6">
        <ImageButton
          image={arrow}
          onClick={onPrev}
          size="w-14"
          className="aspect-square"
          disabled={currentIndex === 0}
        />

        {currentIndex === totalQuestions - 1 ? (
          <button
            onClick={onSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg"
          >
            Terminar
          </button>
        ) : (
          <ImageButton
            image={arrow}
            onClick={onNext}
            size="w-14"
            className="scale-x-[-1]"
            disabled={currentIndex === totalQuestions - 1}
          />
        )}
      </div>
    </div>
  );
}