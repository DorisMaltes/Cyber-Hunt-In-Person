import BackgroundMobile from "./layouts/BackgroundMobile";
import Footer from "./layouts/footerDektop";
import BackgroundMusic from "./components/BackgroundMusic";
import logo from "./assets/CyberHunt-Logo.png";



export default function MobileView() {
    return (

        <div className="min-h-screen flex flex-col">

            <BackgroundMobile />
            
            <main className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-16">
                    <BackgroundMusic iconSize="w-10 h-10"/> 
                    
                     <img src={logo} alt="CyberHunt Logo" className="object-contain"/> 
            </main>



        

            <Footer/>

            


        </div>

    );
}