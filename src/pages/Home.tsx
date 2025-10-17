//Layout Imports
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";

//assets imports
import logo from "../assets/imgs/CyberHunt-Logo.png"
import ImageButton from "../components/ImageButton";
import scanqrButton from "../assets/buttons/scanQRButton.png"
import LeaderBoardButton from "../assets/buttons/LeaderBoardButton.png"

import bdoLogo from "../assets/imgs/bdo_logo_color.png"
import logo2 from "../assets/imgs/images-removebg-preview.png"
import signOutButton from "../assets/buttons/signOutButton.png"

//components imports 
import ModalQuestion from "../features/home/components/ModalQuestion";
import UserInfo from "../features/home/components/UserInfo";
import { useSignOut } from "../features/signOut/hooks/useSignOut";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  const { mutate: signOut } = useSignOut(() => {
    navigate("/");
  });

  

  return (
    <div className="h-svh w-svw">
      <BackgroundMobile />

      <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10">


        <div className="flex flex-row items-center gap-20">
          <img src={bdoLogo} alt="BDO Logo" className="w-32" />
          <img src={logo2} alt="Logo 2" className="w-20" />
        </div>

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
          <ImageButton
            onClick={() => signOut()}
            image={signOutButton}
            size="w-[240px] h-[44px]"
          />
        </div>

        {/* Modal explicativo */}
        <ModalQuestion
          title="What is CyberHunt?"
          description="CyberHunt is an interactive game for you to play during this event. Go and scan QR codes in this some booth and answer questions or play games to earn points and help Mark to kill the virus!"
        />
      </div>

      <Footer />
    </div>
  );
}