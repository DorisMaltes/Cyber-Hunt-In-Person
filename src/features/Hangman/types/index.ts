export type HangmanType = "hangman";

export interface HangmanData {
  id: string;
  type: HangmanType;
  name?: string;
  description?: string;
}

export interface HangmanProgress {
  booth_id: string;
  score_obtained: number;
  visited: boolean;
}

export interface HangmanState {
  word: string;
  guessedLetters: string[];
  wrongGuesses: number;
  gameResult: string | null;
  boothId: string;
  maxWrongGuesses: number;
}

export interface HangmanDrawingProps {
  wrongGuesses: number;
  maxWrongGuesses: number;
}
