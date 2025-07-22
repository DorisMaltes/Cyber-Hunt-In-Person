//Layout Imports
import BackgroundMobile from "../layouts/BackgroundMobile";
import Footer from "../layouts/footerDektop";
// import BackgroundMusic from "../components/BackgroundMusic";

//assets imports
import submit from "../assets/buttons/SubmitButton.png"


//component imports
import TimePill from "../features/QuestionsPage/components/TimePill";
import QuestionCard from "../features/QuestionsPage/components/QuestionCard";
import ImageButton from "../components/ImageButton";


export default function QuestionPage(){
    return(
        <div className="h-svh w-svw">
            <BackgroundMobile/>

            <div className="h-svh w-svw flex flex-col items-center justify-between py-6 px-4 relative z-10 ">

                {/*component pill indicating the time the user is taking to response to the questions*/}
                <TimePill/>

                <QuestionCard/>

                <ImageButton
                image={submit}
                className="w-[260px] h-[72px]"
                to="/summaryPage"
                />


            </div>

            
            <Footer/>
        </div>
    );
}