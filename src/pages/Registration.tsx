// import RegistrationForm from "../features/registration/components/RegistrationForm";
import ImageButton from "../components/ImageButton";
import arrow from "../assets/imgs/flecha.png";
import registerButton from "../assets/buttons/registerButton.png";

//layput imports
import BackgroundMobile from "../layouts/BackgroundMobile";
import BackgroundMusic from "../components/BackgroundMusic";
import Footer from "../layouts/footerDektop";

//imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegistrationForm, useRegister } from "../features/registration";
import type {RegisterData} from "../features/registration/api/registerUser"




export default function Registration() {

  const [formData, setFormData] = useState<RegisterData | null>(null);
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useRegister(() => {
    navigate("/login");
  });

  const handleSubmit = () => {
    if (formData) {
      mutate(formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative">
        
        <BackgroundMusic iconSize="w-8 h-8" />
        <BackgroundMobile />
      

      <main className="relative z-10 flex flex-col items-center justify-center w-screen px-4 pt-4">
        {/* components container */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4">
        
        
         {/* Arrow y title */}
        <div className="flex flex-col items-start  space-y-2 w-full max-w-full">
            <ImageButton to="/" image={arrow} size="w-[50px] h-[50px]" />
            <p className="font-game text-[#FFB800] text-3xl pt-4">Register!</p>
        </div>


          {/* Registration Form */}
          <RegistrationForm onSubmit={setFormData}/>

          {/* Botóncito de registro */}
          <div>
            <ImageButton
              image={registerButton}
              onClick={handleSubmit}
              size="w-48 h-20"
            />
          </div>

          {isPending && <p className="text-white">Registering...</p>}
          
          {/* Error Message 
            Documentation, para saber como se manejan los errores de firebase. para el registro de usuario. Dejo pendiente, 🚩🚩!!
            https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword
          */}
          
          {isError && <p className="text-red-500 text-sm">{(error as any).message}</p>} 

        </div>
      </main>

      <Footer />
    </div>
  );
}
