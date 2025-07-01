import Footer from "./layouts/footerDektop";
import BackgroundDesktop from "./layouts/BackgroundDesktop";
import logo from "./assets/CyberHunt-Logo.png"
import BackgroundMusic from "./components/BackgroundMusic"



export default function DesktopView() {
    return(
        <>
             <div className="relative min-h-screen overflow-hidden">
                <BackgroundDesktop />

                <main className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-16">
                    <BackgroundMusic iconSize="w-24 h-24"/> 

                     <img src={logo} alt="CyberHunt Logo" className=" h-40 object-contain animate-bounce"/> 

                     <p className="text-3xl text-center text-white font-sourceCodeFont pt-24">
                        CYBERHUNT can’t receive input on desktop, <br />
                        we suggest you to visit on mobile! it is worth it! :)
                    </p>

                    
                </main>
                

                <Footer />
            </div>
        
        </>

        
    );
}