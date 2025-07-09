//Layout Imports
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";
import BackgroundMusic from "../components/BackgroundMusic";

//assets imports
import logo from "../assets/imgs/CyberHunt-Logo.png"
import ImageButton from "../components/ImageButton";
import scanqrButton from "../assets/buttons/scanQRButton.png"
import LeaderBoardButton from "../assets/buttons/LeaderBoardButton.png"

//components imports 
import ModalQuestion from "../features/home/components/ModalQuestion";



export default function Home(){
    return(
        <div className="h-svh w-svw">

                <BackgroundMobile />
                <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10 ">
                    
                    <BackgroundMusic iconSize="w-8 h-8"/> 

                    <img src={logo} alt="CyberHuntLogo" className="mb-2" />
                    
                    
                    <div className="relative text-center">
                        <p className="text-[#37E4B9] font-game text-[28px] absolute bottom-[3.5px] font-normal ">Hi, Juan Carlos!</p>
                        <p className="text-white font-game text-[28px] font-normal">Hi, Juan Carlos!</p>

                    </div>

                    <div className="text-center">
                        <p className="text-white font-game text-xl pb-2">Points</p>
                        <p className="text-white font-sourceCodeFont text-5xl font-bold">1000</p>
                    </div>

                    <div className="text-center"> 

                        <p className="text-white font-game text-xl pb-2">Booths Visited</p>
                        <p className="text-white font-sourceCodeFont text-5xl font-bold">1/5</p>

                    </div>

                    
                    
            
                        {/*Scan QR and LeaderBoard buttons*/}
                        <div className="flex flex-col items-center space-y-7 ">
                            <ImageButton
                                to="/scan"
                                image={scanqrButton}
                                size="w-[240px] h-[44px]"
                            />
            
                            <ImageButton
                                to="/leaderboard"
                                image={LeaderBoardButton}
                                size="w-[240px] h-[44px]"
                            />
                        </div>
                

                
                    <ModalQuestion
                    description="CyberHunt is an interactive game for you to play during this event, go and look for QR codes on some booths and start hunting!"
                    title="What is CyberHunt?"
                    />
                    
                </div>
            <Footer/>
        </div>
    );
}