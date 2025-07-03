import ImageButton from "../components/ImageButton";
import arrow from "../assets/imgs/flecha.png"  


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