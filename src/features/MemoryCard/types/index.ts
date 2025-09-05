export type MemoryCardType = "memorycard";

export interface MemoryCardData {
  id: string;
  type: MemoryCardType;
  name?: string;
  description?: string;
}

export interface MemoryCardProgress {
  booth_id: string;
  score_obtained: number;
  visited: boolean;
}

export interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MemoryCardState {
  cards: Card[];
  flippedCards: number[];
  matchedPairs: number;
  moves: number;
  gameResult: string | null;
  boothId: string;
} 