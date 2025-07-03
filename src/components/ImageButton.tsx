//this is a component for the buttons

import { useNavigate } from "react-router-dom";

interface ImageButtonProps {
  to: string; // ruta a la que te llevará
  image: string; // imagen de fondo
  size?: string; // clases de tailwind para tamaño (ej: "w-32 h-12")
  alt?: string; // accesibilidad
}

export default function ImageButton({
  to,
  image,
  size = "w-40 h-16",
  alt = "Button",
}: ImageButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`bg-no-repeat bg-center bg-contain ${size}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label={alt}
    >
      {/* Si quieres puedes agregar texto aquí también */}
    </button>
  );
}
