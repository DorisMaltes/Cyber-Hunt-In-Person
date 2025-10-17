import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";
import { useUserData } from "../features/home";

import { useSignOut } from "../features/signOut/hooks/useSignOut";
import { useNavigate } from "react-router";

//assets imports
import ImageButton from "../components/ImageButton";
import SignOutButton from "../assets/buttons/SignOutButton.png";
import pillYellow from "../assets/imgs/pillYellow.png";
import bdoLogo from "../assets/imgs/bdo_logo_color.png"
import logo2 from "../assets/imgs/images-removebg-preview.png"



import markHappy from "../assets/markStory/MarkHappy.png";

type UserData = {
    name: string;
    score: number;
    visited_booths?: any[];
  };

export default function CompletionPage() {
    const navigate = useNavigate();
    const { mutate: signOut } = useSignOut(() => {
        navigate("/");
    });

    const { data, isLoading, isError } = useUserData();

    //handling of errors using TanStack 
    if (isLoading) return <p className="text-white font-Game text-xl">Loading...</p>;
    if (isError || !data || typeof data.name !== "string" || typeof data.score !== "number") {
        return <p className="text-red-500 font-Game">Error loading user data</p>;
    }
    const {  score = [] } = data as UserData;

    return (
        <div className="w-screen h-screen flex relative">
            <BackgroundMobile />
            
            {/* Main content */}
            <div className="w-full h-full flex flex-col items-center justify-center relative z-20 pt-10">
                <div className="flex flex-row items-center gap-20">
                    <img src={bdoLogo} alt="BDO Logo" className="w-32" />
                    <img src={logo2} alt="Logo 2" className="w-20" />
                </div>
                {/* Congratulations message */}
                <div className="text-center mb-8">
                    <h1 className="text-white font-game text-xl mb-4">
                        Congratulations!
                    </h1>
                    <p className="text-white font-game text-sm mb-2">
                        You have completed all the challenges! and helped Mark kill the virus!
                    </p>
                    <p className="text-white font-game text-sm">
                        You are a true Cyber Hunter! Thank you for playing!
                    </p>
                </div>

                {/* Completion badge */}
                <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-6xl">🏆</span>
                    </div>
                    <img src={markHappy} className="w-32 h-32" />
                </div>

                 {/* Points Section */}
                <div className="mb-6 text-center">
                    <p className="text-white font-game text-xl mb-2">Your Final Points:</p>
                    <div 
                    className="w-32 h-16 bg-no-repeat bg-center bg-contain flex items-center justify-center mx-auto"
                    style={{ backgroundImage: `url(${pillYellow})` }}
                    >
                    <p className="text-[#15054E] font-sourceCodeFont text-3xl font-bold">
                        {score}
                    </p>
                    </div>
                </div>

                <ImageButton
                    onClick={() => signOut()}
                    image={SignOutButton}
                    size="w-48 h-20"
                />

            

            
            </div>
            
            <Footer />
        </div>
    );
}
