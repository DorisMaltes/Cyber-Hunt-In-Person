//layout imports
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";

//assets imports
import botonToHome from "../assets/imgs/flecha.png"

//components imports
import ImageButton from "../components/ImageButton";
import BackgroundMusic from "../components/BackgroundMusic";

//components imports from features/ScanQR
import CamaraContainer from "../features/ScanQR/components/CamaraContainer"



export default function ScanQR(){
    return(
        <div className="h-svh w-svw">

            <BackgroundMobile/>

            <Footer
                fixedBottom={false}
            />
            
            

            <div className="h-svh w-svw flex flex-col items-center justify-between px-4 relative z-10 gap-8">
               <BackgroundMusic iconSize="w-8 h-8"/> 

               <div className="w-full pt-5">
                    
                    <ImageButton
                        to="/home"
                        image={botonToHome} 
                        size="w-[60px] h-[60px]"
                    />
               </div>
               
               <div className="relative text-center">
                    <p className="text-white font-game text-5xl font-normal ">Scan QR</p>
                </div>


               <CamaraContainer/>


                <p className="text-white font-sourceCodeFont text-2xl text-center pb-10">Scan QR to start hunting!</p>
               

                

            </div>
            
            <Footer/>
        </div>
    )
}