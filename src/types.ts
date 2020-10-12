export interface RootState {
  grid: Grid;
  playerTurn: 1 | 2;
  gameResult: GameResult;
  gameHistory: GameHistory;
}

export type Grid = Array<Row>;

export type Row = 0 | 1 | 2;

export interface GameResult {
  status: "continues" | "draw" | "win";
  winner: 0 | 1 | 2;
}

export type GameHistory = Array<Turn>;

export interface Turn {
  id: number;
  grid: Grid;
  playerTurn: PlayerTurn;
}

export type PlayerTurn = 1 | 2;
