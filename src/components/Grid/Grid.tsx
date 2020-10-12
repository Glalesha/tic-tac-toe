import React, { useEffect } from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import { useSelector, useDispatch } from "react-redux";
import setGameResult from "../../store/actions/setGameResult";

interface Props {}

//@ts-ignore

const Grid: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const grid = useSelector((state: any) => state.grid);
  const gameResult = useSelector((state: any) => state.gameResult);
  const playerTurn = useSelector((state: any) => state.playerTurn);

  useEffect(() => {
    checkGameEnd(grid);
  }, [grid]);

  const checkGameEnd = (grid: any) => {
    let gameResult = "continues";

    for (let i = 0; i < grid.length; i++) {
      let previousItem: any;
      for (let j = 0; j < grid[i].length; j++) {
        if (!j) {
          previousItem = grid[i][j];
          continue;
        }

        if (!grid[i][j]) {
          break;
        }

        if (previousItem === grid[i][j] && grid[i].length - 1 === j) {
          gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
        }

        if (previousItem !== grid[i][j]) {
          break;
        }
      }
    }

    for (let i = 0; i < grid[0].length; i++) {
      let previousItem: any;
      for (let j = 0; j < grid.length; j++) {
        if (!j) {
          previousItem = grid[j][i];
          continue;
        }

        if (!grid[j][i]) {
          break;
        }

        if (previousItem === grid[j][i] && grid.length - 1 === j) {
          gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
        }

        if (previousItem !== grid[j][i]) {
          break;
        }
      }
    }

    let previousItem: any;
    for (let i = 0; i < grid.length; i++) {
      if (!i) {
        previousItem = grid[i][i];
        continue;
      }

      if (!grid[i][i]) {
        break;
      }

      if (previousItem === grid[i][i] && grid.length - 1 === i) {
        gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
      }

      if (previousItem !== grid[i][i]) {
        break;
      }
    }
    previousItem = null;

    for (let i = grid.length - 1; i >= 0; i--) {
      if (i === grid.length - 1) {
        previousItem = grid[i][grid.length - 1 - i];
        continue;
      }

      if (!grid[i][grid.length - 1 - i]) {
        break;
      }

      if (previousItem === grid[i][grid.length - 1 - i] && 0 === i) {
        gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
      }

      if (previousItem !== grid[i][grid.length - 1 - i]) {
        break;
      }
    }

    if (gameResult === "continues") {
      let rows = grid.map((row: any) => {
        return row.findIndex((item: any) => {
          return item === 0;
        });

        return;
      });

      let isThereEmptyCells = rows.findIndex((item: any) => {
        return item !== -1;
      });

      if (isThereEmptyCells === -1) {
        gameResult = "draw";
      }
    }
    const arr = [1, 2, 3, 5, -1];
    console.log(arr.some((item) => item > 10));

    dispatch(setGameResult(gameResult));
  };

  return (
    <Table>
      <tbody>
        {grid.map((item: any, row: number) => {
          return (
            <Tr key={row}>
              {item.map((item: any, column: number) => {
                return (
                  <Td key={column}>
                    <Cell
                      mark={item}
                      row={row}
                      column={column}
                      disabled={!(gameResult === "continues")}
                    />
                    {console.log(
                      "game result = " + !(gameResult === "continues"),
                      gameResult
                    )}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Grid;

const Table = styled.table`
  border-collapse: collapse;
`;

const Tr = styled.tr``;

const Td = styled.td`
  width: 50px;
  height: 50px;
  border: 1px solid white;
`;
