export interface RootState {
  grid: Grid;
  playerTurn: 1 | 2;
  gameResult: "continues" | "draw" | string;
  gameHistory: GameHistory;
}

export type Grid = Array<Row>;

export type Row = 0 | 1 | 2;

export type GameHistory = Array<Turn>;

export interface Turn {
  id: number;
  grid: Grid;
  playerTurn: PlayerTurn;
}

export type PlayerTurn = 1 | 2;
