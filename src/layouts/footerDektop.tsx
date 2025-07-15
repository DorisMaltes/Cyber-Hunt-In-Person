import ladrillosDesktop from "./../assets/desktop/Ladrillos-Desktop.png"
import useDeviceDetect from './../hooks/useDeviceDetect'
import ladrillosMobile from "./../assets/mobile/Ladrillos-Mobile.png"

//this is when we want the "footer" or the brick componente to be on the top for example to be used in the Scan QR Page or LeaderBoard Page de default is true 
interface FooterProps{
    fixedBottom?: boolean;
}


export default function Footer({fixedBottom = true}:FooterProps){

    
    const { isMobile } = useDeviceDetect();

    if(fixedBottom && isMobile) {
         return (
        <>
             <footer 
                className="text-white p-4  shadow-inner fixed bottom-0 w-full h-20"
                style={{backgroundImage: `url(${ladrillosMobile})`}}
            />  
        </>);
    }
    
    if((fixedBottom == false) && isMobile){
         return (
        <>
             <footer 
                className="text-white p-4  shadow-inner fixed top-0 w-full h-20"
                style={{backgroundImage: `url(${ladrillosMobile})`}}
            />  
        </>);
    }
    // //This is Mobile's Footer
    // if (isMobile) 
    //     return (
    //     <>
    //          <footer 
    //             className="text-white p-4  shadow-inner fixed bottom-0 w-full h-20"
    //             style={{backgroundImage: `url(${ladrillosMobile})`}}
    //         />  
    //     </>);

    //this is for Desktop's Footer
    else return(
    <>
        <footer 
            className="w-full h-[194px] bg-repeat-x absolute bottom-0"
            style={{backgroundImage: `url(${ladrillosDesktop})`}}
       /> 
    </>);
}

