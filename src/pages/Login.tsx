import ImageButton from "../components/ImageButton";
import arrow from "../assets/imgs/flecha.png";
import loginButton from "../assets/buttons/botonLogIn.png"
import BackgroundMobile from "../layouts/BackgroundMobile";
import BackgroundMusic from "../components/BackgroundMusic";
import Footer from "../layouts/footerDektop";
import LogInForm from "../features/logIn/components/LogInForm"



export default function Login(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-between relative">
        
        <BackgroundMusic iconSize="w-8 h-8" />
        <BackgroundMobile />
      

      <main className="relative z-10 flex flex-col items-center justify-center w-screen px-4 pt-4">
        
        {/* components container */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4">
         
         
          {/* Arrow y title */}
        <div className="flex flex-col items-start  space-y-2 w-full max-w-full">
            <ImageButton to="/" image={arrow} size="w-[50px] h-[50px]" />
            <p className="font-game text-[#FFB800] text-3xl pt-4">Log in!</p>
        </div>


          {/* lOG iN FORM */}
            <LogInForm/>
          
          {/* Log in Button */}
          <div>
            <ImageButton
              image={loginButton}
              onClick={() => console.log("Log in exitoso")}
              to="/home"
              size="w-48 h-20"
            />

          </div>
        </div>
      </main>

      <Footer />
    </div>
    );
}
