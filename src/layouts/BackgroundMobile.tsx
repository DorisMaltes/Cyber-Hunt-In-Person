import MovingCloud from "../components/design-components/MovingCloud"

import star1 from "../assets/star-gif.gif"
import star2 from "../assets/star2.png"
import star3 from "../assets/star3.png"
import star4 from "../assets/star4.png"
import star5 from "../assets/star5.png"

import nube1 from "../assets/nube1.png"


export default function BackgroundMobile() {
    return (
        <>
            <div className="relative w-full">
                <div className="relative">
                    <MovingCloud
                        imageUrl={nube1}
                        direction="right-to-left"
                        size={{ width: 'w-64', height: 'h-40' }}
                        speed={0.5}
                        yPosition="top-1/3"
                    />
                       
                    <MovingCloud
                        imageUrl={nube1}
                        direction="left-to-right"
                        size={{ width: 'w-48', height: 'h-32' }}
                        speed={1}
                        yPosition="top-1/2"
                    />
                </div>
            </div>
        </>
    );

}
