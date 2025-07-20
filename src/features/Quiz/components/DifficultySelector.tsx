import EasyButton from "../../../assets/buttons/Easy_Button.png";
import HardButton from "../../../assets/buttons/Hard_Button.png";
import ImageButton from "../../../components/ImageButton";
import type { DifficultyType } from "../types";

interface DifficultySelectorProps {
    onSelectDifficulty: (difficulty: DifficultyType) => void;
    loading?: boolean;
}

export const DifficultySelector = ({ onSelectDifficulty, loading }: DifficultySelectorProps) => {
    return (
        <div className="flex flex-col items-center gap-6">
        <p className="text-white font-game text-2xl text-center">
            Select difficulty:
        </p>
        
        <div className="flex flex-col gap-4">
            <ImageButton
            image={EasyButton}
            onClick={() => onSelectDifficulty("easy")}
            disabled={loading}
            className="w-[200px] h-[60px]"
            />
            
            <ImageButton
            image={HardButton}
            onClick={() => onSelectDifficulty("hard")}
            disabled={loading}
            className="w-[200px] h-[60px]"
            />
        </div>
        
        {loading && (
            <p className="text-white font-sourceCodeFont text-lg">
            Loading questions...
            </p>
        )}
        </div>
    );
}; 