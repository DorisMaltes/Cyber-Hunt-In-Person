export type RandomType = "roulette" | string;

export interface RandomData {
  id: string;
  type: RandomType;
  name?: string;
  description?: string;
}

export interface RandomProgress {
  booth_id: string;
  score_obtained: number;
  visited: boolean;
}

export interface RouletteState {
  alreadyPlayed: boolean;
  result: number | null;
  boothId: string;
} 