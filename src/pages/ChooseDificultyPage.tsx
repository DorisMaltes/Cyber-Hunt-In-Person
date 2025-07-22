//layout imports
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";

//assets imports
// import botonToHome from "../assets/imgs/flecha.png"
import Easybutton from "../assets/buttons/Easy_Button.png"
import hardButton from  "../assets/buttons/Hard_Button.png"
import logo from "../assets/imgs/CyberHunt-Logo.png"

//components imports
import ImageButton from "../components/ImageButton";
import BackgroundMusic from "../components/BackgroundMusic";

import ModalQuestion from "../features/home/components/ModalQuestion";




export default function ChooseDificultyPage(){
return(
        <div className="h-svh w-svw">

                <BackgroundMobile />
                <div className="h-svh w-svw flex flex-col items-center justify-between gap-10 py-6 px-4 relative z-10 ">
                    
                    <BackgroundMusic iconSize="w-8 h-8"/> 

                    <img src={logo} alt="CyberHuntLogo" className="mb-2" />
                    

                    <div className="text-center">
                        <p className="text-white font-game text-3xl">Company’s Name Booth</p>
                    </div>

                    
            
                        {/*Easy or Hard Questions buttons*/}
                        <div className="flex flex-col items-center space-y-12 ">
                            <ImageButton
                                to="/scan"
                                image={Easybutton}
                                size="w-[280px] h-[76px]"
                            />
            
                            <ImageButton
                                to="/leaderboard"
                                image={hardButton}
                                size="w-[280px] h-[76px]"
                            />
                        </div>
                

                
                    <ModalQuestion
                        title="What to choose?"
                        description="Correct answers to easy questions earn 5 points, while incorrect answers deduct 2 points. Hard questions earn 10 points, while incorrect answers deduct 5 points."
                    />
                    
                </div>
            <Footer/>
        </div>
    );
}