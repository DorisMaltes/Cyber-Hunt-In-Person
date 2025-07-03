import ImageButton from "../components/ImageButton";
import arrow from "../assets/imgs/flecha.png";

import registerButton from "../assets/buttons/registerButton.png";

import BackgroundMobile from "../layouts/BackgroundMobile";
import BackgroundMusic from "../components/BackgroundMusic";
import Footer from "../layouts/footerDektop";


export default function Login(){
    return(
        <>





        <ImageButton
            to="/"
            image={arrow}
            size="w-[60px] h-[60px]"
        />
            <p className="font-game ">LogIn!</p>
        </>
    );
}