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
import UserInfo from "../features/home/components/UserInfo";



export default function Home() {
  return (
    <div className="h-svh w-svw">
      <BackgroundMobile />

      <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10">
        {/* Música de fondo 
        <BackgroundMusic iconSize="w-8 h-8" />*/}

        {/* Logo */}
        <img src={logo} alt="CyberHuntLogo" className="mb-2" />

        {/* Información dinámica del usuario */}
        <UserInfo />

        {/* Botones */}
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

        {/* Modal explicativo */}
        <ModalQuestion
          title="What is CyberHunt?"
          description="CyberHunt is an interactive game for you to play during this event. Go and look for QR codes on some booths and start hunting!"
        />
      </div>

      <Footer />
    </div>
  );
}