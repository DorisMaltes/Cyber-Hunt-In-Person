//component of the purple registration form

import  purpleBackground from "../../../assets/imgs/Cuadro-De-Contenido-morado.png"
import ImageInput from "../../../components/ImageInput";


export default function LogInForm(){
    return(
        <div className="relative inline-block">
            <img src={purpleBackground} alt="" className="block" />
            
            <div className="absolute inset-0 overflow-y-auto flex items-center justify-center">
                
                <div className="flex flex-col items-center justify-center h-full w-full p-6">
                   
                    <div className="flex flex-col gap-10">
                        <ImageInput type="text" placeholder="Email" inputMode="email" />
                        <ImageInput type="password" placeholder="Password" />
                    </div>

                </div>
                
            </div>
        </div>
    );
}