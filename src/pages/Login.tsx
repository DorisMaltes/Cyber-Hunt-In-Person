import ImageButton from "../components/ImageButton";
import arrow from "../assets/imgs/flecha.png";
import loginButton from "../assets/buttons/botonLogIn.png"
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, LogInForm } from "../features/logIn/index";
import type {LoginData} from "../features/logIn/index"




export default function Login(){

  const [formData, setFormData] = useState<LoginData | null>(null);
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useLogin(() => {
    navigate("/storyLine"); //after login, redirect to story line
  });

  const handleLogin = () => {
    if (formData) {
      mutate(formData);
    }
  };

  useEffect(() => {
    if (isError && (error as any).message === "Firebase: Error (auth/wrong-password).") {
      alert("Wrong password");
    }
    if (isError && (error as any).message === "Firebase: Error (auth/user-not-found).") {
      alert("User not found");
    }
    if (isError && (error as any).message === "Firebase: Error (auth/invalid-email).") {
      alert("Invalid email");
    }
    if (isError && (error as any).message === "Firebase: Error (auth/invalid-credential).") {
      alert("The email or password is incorrect");
    }
  }, [isError, error]);
    

    return(
    <div className="min-h-screen flex flex-col items-center justify-between relative">
        
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
            <LogInForm onSubmit={setFormData}/>
          
          {/* Log in Button */}
          <div>
            <ImageButton
              image={loginButton}
              onClick={handleLogin}
              size="w-48 h-20"
            />
          </div>

          {isPending && <p className="text-white">Log In... </p>}
          
        {/* {isError && <p className="text-red-500 text-sm">{(error as any).message}</p>} */}
          
        </div>
      </main>

      <Footer />
    </div>
    );
}
