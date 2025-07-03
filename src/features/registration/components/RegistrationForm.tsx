import  purpleBackground from "../../../assets/imgs/Cuadro-De-Contenido-morado.png"
import ImageInput from "../../../components/ImageInput";


export default function RegistrationForm(){
    return(
        <div className="relative inline-block">
            <img src={purpleBackground} alt="" className="block" />
            
            <div className="absolute inset-0 overflow-y-auto flex items-center justify-center">
                
                <div className="flex flex-col justify-between h-full w-full p-5">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Company"/>
                    <input type="number" placeholder="Number" inputMode="numeric"/>

                    <input type="text" placeholder="Email" inputMode="email"/>
                    <input type="password" placeholder="Password"/>

                    <ImageInput/>
                    
                </div>
                
            </div>
        </div>
    );
}