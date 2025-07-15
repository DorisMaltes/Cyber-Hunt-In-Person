// this is a component for doing things with a custom button image 

import { useNavigate } from "react-router-dom";

interface ImageButtonProps {
  to?: string;
  onClick?: () => void;
  image: string;
  size?: string;
  alt?: string;
  className?: string;
}

export default function ImageButton({
  to,
  onClick,
  image,
  size = "w-40 h-16",
  alt = "Button",
  className
}: ImageButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();     // excutes the function first
    if (to) navigate(to);       // Luego navega
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-no-repeat bg-center bg-contain ${size} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
      aria-label={alt}
    />
  );
}
