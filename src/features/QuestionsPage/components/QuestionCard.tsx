//assets imports
import purplerCard from "../../../assets/imgs/Cuadro-De-Contenido-morado.png"
import AquaPill from "../../../assets/imgs/AquaPill.png"
import arrow from "../../../assets/imgs/flecha.png"

//components imports 
import ImageButton from "../../../components/ImageButton";
 


export default function QuestionCard(){
    
    // const preguntasDummies = ["What is phishing?", "What is spoofing?"];
    
    // const opciones = ["Pedro", "Ricardo", "Penelope", "Jonas"];

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
    );
}