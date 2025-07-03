// this is a component for doing things with a custom button image 

import { useNavigate } from "react-router-dom";

interface ImageButtonProps {
  to?: string;
  onClick?: () => void;
  image: string;
  size?: string;
  alt?: string;
}

export default function ImageButton({
  to,
  onClick,
  image,
  size = "w-40 h-16",
  alt = "Button",
}: ImageButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();     // Ejecuta tu función primero
    if (to) navigate(to);       // Luego navega
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-no-repeat bg-center bg-contain ${size}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label={alt}
    />
  );
}
