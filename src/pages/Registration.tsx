import RegistrationForm from "../features/registration/components/RegistrationForm";
import ImageButton from "../components/ImageButton";  
import arrow from "../assets/imgs/flecha.png"  
export default function Registration(){
    return(
        <>
            <ImageButton
            to="/"
            image={arrow}
            size="w-[60px] h-[60px]"
            />

            <p className="font-game ">Register!</p>
            <RegistrationForm/>
        </>
    );
}