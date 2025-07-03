import inputImage from "../assets/imgs/input.png"


export default function ImageInput(){
    return(

       <div
      className="bg-no-repeat p-4"
      style={{
        backgroundImage: `url(${inputImage})`,
        width:  '223px',  // ← ancho real de tu imagen
        height: '66px'   // ← alto real de tu imagen
      }}
    >
      <input
        type="text"
        placeholder="holi"
        className="
          block       /* para que respete el width */
          w-full      /* ocupe el 100% del padre */
          max-w-full  /* nunca lo supere */
          font-sourceCodeFont text-xl text-[#5323C7] font-bold
        "
      />
    </div>
        
    );
}