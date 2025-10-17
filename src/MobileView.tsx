import BackgroundMobile from "./layouts/BackgroundMobile";
import Footer from "./layouts/footerDektop";
import logo from "./assets/imgs/CyberHunt-Logo.png";

import ImageButton from "./components/ImageButton";

import botonLogIn from "./assets/buttons/botonLogIn.png"
import buttonRegister from "./assets/buttons/registerButton.png"

//logo imports
import bdoLogo from "./assets/imgs/bdo_logo_color.png"
import logo2 from "./assets/imgs/images-removebg-preview.png"


export default function MobileView() {
    return (

        <div className="min-h-screen flex flex-col">

            <BackgroundMobile />
            
            <main className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-16  pt-[100px]">
                

                 {/* Logo */}
                 <div className="flex flex-row items-center gap-20 pb-12">
                    <img src={bdoLogo} alt="BDO Logo" className="w-32" />
                    <img src={logo2} alt="Logo 2" className="w-20" />
                </div>


               
                    
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