import MovingCloud from "../components/design-components/MovingCloud"

import star1 from "../assets/stars/star-gif.gif"
import star2 from "../assets/stars/star2GIF.gif"
import star3 from "../assets/stars/star3GIF.gif"
import star5 from "../assets/stars/star5.png"

import nube1 from "../assets/imgs/nube1.png"
import nube2 from "../assets/imgs/nube2.png"

import star6 from "../assets/stars/estrella6.gif"
import star7 from "../assets/stars/estrella7.gif";
import star8 from "../assets/stars/estrella8.gif"
import star9 from "../assets/stars/estrella9.png"
import star10 from "../assets/stars/estrella10.gif"


export default function BackgroundMobile() {
    return (
        <div className="fixed inset-0 -z-10 bg-cover bg-center bg-[#15054E]">

               
                <div className="relative h-svh w-svw">


                    {/* estrella MORADA con 4 circurlos y cruz*/}
                     <img src={star2} className="w-[46px] object-contain absolute bottom-[50%] left-[2%]" />

                    {/*estrella azul AQUA */}
                      <img src={star1} className="w-[25px] object-contain absolute top-[0%] left-[42%]" />

                    {/* estrella normal AMARILLA*/}
                      <img src={star3} className="w-[20px] rotate-45 object-contain absolute top-[10%] left-[28%]" />

                    {/* estrella AQUA con 4 ciruclos en el medio y cruz*/}
                      <img src={star8} className="h-[35px] rotate-1 object-contain absolute top-[12%] right-[1%]" />

                    {/*estrella amarilla normal*/}
                      <img src={star3} className="w-[30px] rotate-45 object-contain absolute top-[1.5%] right-[20%]" />

                    {/*punto morado*/}
                    <img src={star5} className="w-[5px] object-contain absolute top-[6%] right-[52%]" /> 


                     {/*punto morado*/}
                    <img src={star5} className="w-[5px] object-contain absolute top-[3%] left-[25%]" /> 

                      {/*punto morado*/}
                    <img src={star5} className="w-[5px] object-contain absolute top-[4%] right-[10%]" /> 

                    {/*4 estrellas juntas AMARILLAS */}
                    <img src={star3} className="w-[26px]  object-contain absolute top-[12%] left-[3%] rotate-0" />

                    
                    {/*4 puntos MORADS*/}
                    <img src={star6} className="w-[50px]  object-contain absolute top-[3%] left-[7%] " />

                    {/*cruz MORADA aqua con 4 puntos en el medio*/}
                    <img src={star7} className="w-[30px]   object-contain absolute top-[65%] right-[3%] " />

                    {/*cruz azul aqua con 4 puntos en el medio*/}
                    <img src={star8} className="w-[20px] object-contain absolute top-[1%] left-[0%] " />

                    {/*cruz azul aqua con 4 puntos en el medio*/}
                    <img src={star8} className="w-[25px] object-contain absolute top-[70%] left-[2%] " />

                    {/*punto morado*/}
                    <img src={star5} className="w-[5px] object-contain absolute  top-[62%] left-[6%]" /> 
                    
                    {/*punto morado*/}
                    <img src={star5} className="w-[5px] object-contain absolute  top-[50%] right-[6%]" /> 

                    {/*circulo de puntos AMRAILLO*/}
                    <img src={star10} className="w-[25px]  object-contain absolute top-[8%] right-[30%]" />


                </div>
                
                 <MovingCloud
                    imageUrl={nube1}
                    direction="left-to-right"
                    size={{ width: 'w-[74px]', height: 'h-[50px]' }}
                    speed={1}
                    yPosition="top-[4%]"
                />



                <MovingCloud
                    imageUrl={nube2}
                    direction="right-to-left"
                    size={{ width: 'w-[94px]', height: 'h-[50px]' }}
                    speed={0.5}
                    yPosition="top-[30%]"
                />

                 <MovingCloud
                    imageUrl={nube2}
                    direction="left-to-right"
                    size={{ width: 'w-[100px]', height: 'h-[50px]' }}
                    speed={0.5}
                    yPosition="bottom-[15%]"
                />


        </div>
    );

}
