//this page is to show the summary of the users answers

// import layouts
import Footer from "../layouts/footerDektop";
import BackgroundMobile from "../layouts/BackgroundMobile";


// import assets 
// import logo from "../assets/imgs/CyberHunt-Logo.png"
// import arrow from "../assets/imgs/flecha.png"; 
import HomeButton from "../assets/buttons/HomeButton.png"

//import components
import ImageButton from "../components/ImageButton";
import SummaryContainer from "../features/summary/components/SummaryContainer";




export default function SummaryPage(){
    return(
        <div className="h-svh w-svw">

                <BackgroundMobile />
                <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10 ">
                    
                   
                    <div className="text-center">
                        <p className="text-white font-game text-4xl">Summary</p>
                    </div>


                    <SummaryContainer/>



                    <ImageButton
                    image={HomeButton}
                    to="/home"
                    className="w-64 h-[70px]"
                    />
                  

                    
                     
                   
                    
                </div>
            <Footer/>
        </div>
    );
}