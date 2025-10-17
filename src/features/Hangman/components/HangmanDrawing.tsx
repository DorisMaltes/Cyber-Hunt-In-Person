import type { HangmanDrawingProps } from "../types";

export const HangmanDrawing = ({ wrongGuesses }: HangmanDrawingProps) => {
  const getDrawingParts = () => {
    const parts = [];
    
    // Base
    if (wrongGuesses >= 1) {
      parts.push(
        <div key="base" className="w-24 h-1 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      );
    }
    
    // Pole
    if (wrongGuesses >= 2) {
      parts.push(
        <div key="pole" className="w-1 h-32 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      );
    }
    
    // Top beam
    if (wrongGuesses >= 3) {
      parts.push(
        <div key="top-beam" className="w-20 h-1 bg-white absolute top-0 left-1/2 transform -translate-x-1/2" />
      );
    }
    
    // Rope
    if (wrongGuesses >= 4) {
      parts.push(
        <div key="rope" className="w-1 h-8 bg-white absolute top-0 left-1/2 transform -translate-x-1/2" />
      );
    }
    
    // Head
    if (wrongGuesses >= 5) {
      parts.push(
        <div key="head" className="w-8 h-8 border-2 border-white rounded-full absolute top-8 left-1/2 transform -translate-x-1/2" />
      );
    }
    
    // Body
    if (wrongGuesses >= 6) {
      parts.push(
        <div key="body" className="w-1 h-16 bg-white absolute top-16 left-1/2 transform -translate-x-1/2" />
      );
    }
    
    // Left arm
    if (wrongGuesses >= 7) {
      parts.push(
        <div key="left-arm" className="w-1 h-8 bg-white absolute top-20 left-1/2 transform -translate-x-1/2 rotate-45 origin-top" />
      );
    }
    
    // Right arm
    if (wrongGuesses >= 8) {
      parts.push(
        <div key="right-arm" className="w-1 h-8 bg-white absolute top-20 left-1/2 transform -translate-x-1/2 -rotate-45 origin-top" />
      );
    }
    
    // Left leg
    if (wrongGuesses >= 9) {
      parts.push(
        <div key="left-leg" className="w-1 h-8 bg-white absolute top-32 left-1/2 transform -translate-x-1/2 rotate-45 origin-top" />
      );
    }
    
    // Right leg
    if (wrongGuesses >= 10) {
      parts.push(
        <div key="right-leg" className="w-1 h-8 bg-white absolute top-32 left-1/2 transform -translate-x-1/2 -rotate-45 origin-top" />
      );
    }
    
    return parts;
  };

  return (
    <div className="relative w-32 h-40 mx-auto mb-6">
      {getDrawingParts()}
    </div>
  );
};
