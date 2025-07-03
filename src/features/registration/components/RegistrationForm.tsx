//component of the purple registration form

import  purpleBackground from "../../../assets/imgs/Cuadro-De-Contenido-morado.png"
import ImageInput from "../../../components/ImageInput";


export default function RegistrationForm(){
    return(
        <div className="relative inline-block">
            <img src={purpleBackground} alt="" className="block" />
            
            <div className="absolute inset-0 overflow-y-auto flex items-center justify-center">
                
                <div className="flex flex-col items-center justify-between h-full w-full p-6">
                   
                    <ImageInput type="text" placeholder="Name" />
                    <ImageInput type="text" placeholder="Title" inputMode="numeric" />
                    <ImageInput type="text" placeholder="Company" />
                    <ImageInput type="text" placeholder="Number" inputMode="numeric" />

                    <ImageInput type="text" placeholder="Email" inputMode="email" />
                    <ImageInput type="password" placeholder="Password" />

                </div>
                
            </div>
        </div>
    );
}