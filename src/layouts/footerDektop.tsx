import ladrillosDesktop from "./../assets/desktop/Ladrillos-Desktop.png"
import useDeviceDetect from './../hooks/useDeviceDetect'
import ladrillosMobile from "./../assets/mobile/Ladrillos-Mobile.png"



export default function Footer(){

    const { isMobile } = useDeviceDetect();

    //This is Mobile's Footer
    if (isMobile) 
        return (
        <>
             <footer 
                className="text-white p-4  shadow-inner fixed bottom-0 w-full"
                style={{backgroundImage: `url(${ladrillosMobile})`}}
            />  
        </>);

    //this is for Desktop's Footer
    else return(
    <>
        <footer 
            className="text-white p-4  shadow-inner fixed bottom-0 w-full h-44"
            style={{backgroundImage: `url(${ladrillosDesktop})`}}
       /> 
    </>);
}