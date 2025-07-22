export type GameType = "tictactoe" | "roulette" | string;

export interface GameData {
  id: string;
  type: GameType;
  name?: string;
  description?: string;
}

export interface GameProgress {
  booth_id: string;
  score_obtained: number;
  visited: boolean;
}

export interface TicTacToeState {
  board: (string | null)[];
  isPlayerTurn: boolean;
  gameResult: string | null;
  boothId: string;
} 