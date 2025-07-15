//this page is to show the user that they have visited this booth before

// import layouts
import Footer from "../layouts/footerDektop";
import BackgroundMobile from "../layouts/BackgroundMobile";


// import assets 
import logo from "../assets/imgs/CyberHunt-Logo.png"
import arrow from "../assets/imgs/flecha.png"; 

//import components
import ImageButton from "../components/ImageButton";


export default function AlreadyVisitedBooth(){
    return(
        <div className="h-svh w-svw">

                <BackgroundMobile />
                <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10 ">
                    
                    {/* <BackgroundMusic iconSize="w-8 h-8"/>  */}

                    <img src={logo} alt="CyberHuntLogo" className="mb-2" />


                    <div className="text-center">
                        <p className="text-white font-game text-4xl pb-10">You have already visited this booth.</p>
                        <p className="text-white font-game text-4xl ">Please continue exploring </p>


                    </div>

                    <div className="text-center">
                        <p className="text-white font-game text-xl pb-2">Points: 20</p>
                    </div>

                    <ImageButton
                        image={arrow}
                        className="w-24 h-24"
                        to="/home"
                    />
                     
                   
                    
                </div>
            <Footer/>
        </div>

    );
}