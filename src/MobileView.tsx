import BackgroundMobile from "./layouts/BackgroundMobile";
import Footer from "./layouts/footerDektop";
import BackgroundMusic from "./components/BackgroundMusic";
import logo from "./assets/imgs/CyberHunt-Logo.png";

import ImageButton from "./components/ImageButton";

import botonLogIn from "./assets/buttons/botonLogIn.png"
import buttonRegister from "./assets/buttons/registerButton.png"


export default function MobileView() {
    return (

        <div className="min-h-screen flex flex-col">

            <BackgroundMobile />
            
            <main className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-16  pt-[300px]">
                <BackgroundMusic iconSize="w-8 h-8"/> 
                    
                <img src={logo} alt="CyberHunt Logo" className="object-contain animate-bounce"/> 

                <div className="flex flex-col   pt-14">
                    
                    <ImageButton
                        to="/login"
                        image={botonLogIn}
                        size="w-48 h-20"
                        alt="Log In Page"
                    />

                    

                    <br />

                    <ImageButton
                        to="/register"
                        image={buttonRegister}
                        size="w-48 h-20"
                        alt="Register Page"
                    />

                    
                </div>
               


            </main>
        

            <Footer/>

            
        </div>

    );
}