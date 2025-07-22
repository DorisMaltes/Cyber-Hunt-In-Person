export type BoothType = "questions" | "game" | "random";
export type GameType = "tictactoe" | "roulette" | string;

export interface BoothData {
  id: string;
  type: BoothType;
}

// Añade esta interfaz para las props del QRScanner
export type QRScannerProps = {
    onScan: (data: string) => void;
    onError?: (error: Error) => void;

}

