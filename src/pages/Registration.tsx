import RegistrationForm from "../features/registration/components/RegistrationForm";
import ImageButton from "../components/ImageButton";
import arrow from "../assets/imgs/flecha.png";
import registerButton from "../assets/buttons/registerButton.png";

import BackgroundMobile from "../layouts/BackgroundMobile";
import BackgroundMusic from "../components/BackgroundMusic";
import Footer from "../layouts/footerDektop";

export default function Registration() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative">
        
        <BackgroundMusic iconSize="w-8 h-8" />
        <BackgroundMobile />
      

      <main className="relative z-10 flex flex-col items-center justify-center w-screen px-4 pt-4">
        {/* components container */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4">
         
         
          {/* Flecha y título */}
        <div className="flex flex-col items-start  space-y-2 w-full max-w-full">
            <ImageButton to="/" image={arrow} size="w-[50px] h-[50px]" />
            <p className="font-game text-[#FFB800] text-3xl pt-4">Register!</p>
        </div>


          {/* Formulario */}
          <RegistrationForm />

          {/* Botón de registro */}
          <div>
            <ImageButton
              image={registerButton}
              onClick={() => console.log("Registro enviado")}
              to="/"
              size="w-[160px] h-[50px]"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
