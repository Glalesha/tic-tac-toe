import { Grid } from "../types";

export const createGrid = (rows: number, columns: number): Grid => {
  const grid: any = [];
  for (let i = 0; i < columns; i++) {
    grid.push([]);

    for (let j = 0; j < rows; j++) {
      grid[i].push(0);
    }
  }

  return grid;
};
