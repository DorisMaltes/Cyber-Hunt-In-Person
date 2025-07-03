import inputImage from "../assets/imgs/input.png"

interface ImageInputProps{
  type: string;
  placeholder: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}


export default function ImageInput({type, placeholder, inputMode= "text",}:ImageInputProps ){
    //aqui iran la funcion que haran los inputs :)) los podemos traer de hooks especificos de feutures
  
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
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        className="
          block       /* para que respete el width */
          w-full      /* ocupe el 100% del padre */
          placeholder-[#5323C7]
          max-w-full  /* nunca lo supere */
          font-sourceCodeFont text-xl text-[#5323C7] font-bold
        "
      />
    </div>
        
    );
}