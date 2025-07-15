import type { Difficulty } from "../types";

interface DifficultySelectorProps {
  onSelect: (difficulty: Difficulty) => void;
}

export default function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-white font-game text-xl">Selecciona la dificultad:</p>
      <div className="flex gap-6">
        <button
          onClick={() => onSelect("easy")}
          className="bg-green-500 hover:bg-green-600 text-white font-game px-6 py-2 rounded-lg text-lg"
        >
          Fácil
        </button>
        <button
          onClick={() => onSelect("hard")}
          className="bg-red-500 hover:bg-red-600 text-white font-game px-6 py-2 rounded-lg text-lg"
        >
          Difícil
        </button>
      </div>
    </div>
  );
}