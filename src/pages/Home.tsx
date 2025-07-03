import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";
import logo from "../assets/imgs/CyberHunt-Logo.png"
import ImageButton from "../components/ImageButton";

import scanqrButton from "../assets/buttons/scanQRButton.png"
import LeaderBoardButton from "../assets/buttons/LeaderBoardButton.png"

import question from "../assets/buttons/QuestionMarkButton.png"

export default function Home(){
    return(
        <>
        <div className="h-svh w-svw flex flex-col items-center bg-[red]">
            
            <BackgroundMobile />

            <img src={logo} alt="CyberHuntLogo" />
            
            <main className="bg-black flex flex-col items-center">
                <p className="text-white font-game">Hi, Doris!</p>

                <p className="text-white font-game">Points</p>

                <p className="text-white font-game">1000</p>

                <p className="text-white font-game">Booths Visited</p>
                
                <p className="text-white font-game">1/5</p>

            </main>

            {/*button Scan QR y LeaderBoard*/}
            <div className="bg-[blue] flex flex-col gap-8">
                <ImageButton
                    to="/"
                    image={scanqrButton}
                    size="w-[240px] h-[44px]"
                />

                <ImageButton
                    to="/"
                    image={LeaderBoardButton}
                    size="w-[240px] h-[44px]"
                />
            </div>

            
            <ImageButton
                    to="/"
                    image={question}
                    size="w-[61px] h-[61px]"
                />

           
            
            <Footer/>
        </div>
        </>
    );
}