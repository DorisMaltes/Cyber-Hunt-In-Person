//this is the component for the pill that shows the time

//assets imports
import AquaPill from "../../../assets/imgs/AquaPill.png"
import clock from "../../../assets/imgs/clock.png"

export default function TimePill(){
    return(
        <>
            <div style={{ 
                        backgroundImage: `url(${AquaPill})`,
                        width: "183px",
                        height: "50px",
                        backgroundSize: "contain", // o "100% 100%" si quieres que llene exactamente
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"}}
                    className="flex justify-center items-center">
                
                <div className="flex flex-row gap-3 items-center justify-center">
                    <img src={clock} alt="clock" />
                    <p className="text-[#4E0BBC] text-2xl font-game">1</p>
                </div>
            </div>
        </>
    );
}