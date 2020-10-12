import React, { useEffect } from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import { useSelector, useDispatch } from "react-redux";
import setGameResult from "../../store/actions/setGameResult";

interface Props {}

//@ts-ignore

const Grid: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const matrix = useSelector((state: any) => state.matrix);
  const gameResult = useSelector((state: any) => state.gameResult);
  const playerTurn = useSelector((state: any) => state.playerTurn);

  useEffect(() => {
    checkGameEnd(matrix);
  }, [matrix]);

  const checkGameEnd = (matrix: any) => {
    let gameResult = "continues";

    for (let i = 0; i < matrix.length; i++) {
      let previousItem: any;
      for (let j = 0; j < matrix[i].length; j++) {
        if (!j) {
          previousItem = matrix[i][j];
          continue;
        }

        if (!matrix[i][j]) {
          break;
        }

        if (previousItem === matrix[i][j] && matrix[i].length - 1 === j) {
          gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
        }

        if (previousItem !== matrix[i][j]) {
          break;
        }
      }
    }

    for (let i = 0; i < matrix[0].length; i++) {
      let previousItem: any;
      for (let j = 0; j < matrix.length; j++) {
        if (!j) {
          previousItem = matrix[j][i];
          continue;
        }

        if (!matrix[j][i]) {
          break;
        }

        if (previousItem === matrix[j][i] && matrix.length - 1 === j) {
          gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
        }

        if (previousItem !== matrix[j][i]) {
          break;
        }
      }
    }

    let previousItem: any;
    for (let i = 0; i < matrix.length; i++) {
      if (!i) {
        previousItem = matrix[i][i];
        continue;
      }

      if (!matrix[i][i]) {
        break;
      }

      if (previousItem === matrix[i][i] && matrix.length - 1 === i) {
        gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
      }

      if (previousItem !== matrix[i][i]) {
        break;
      }
    }
    previousItem = null;

    for (let i = matrix.length - 1; i >= 0; i--) {
      if (i === matrix.length - 1) {
        previousItem = matrix[i][matrix.length - 1 - i];
        continue;
      }

      if (!matrix[i][matrix.length - 1 - i]) {
        break;
      }

      if (previousItem === matrix[i][matrix.length - 1 - i] && 0 === i) {
        gameResult = `${playerTurn === "x" ? "o" : "x"} win`;
      }

      if (previousItem !== matrix[i][matrix.length - 1 - i]) {
        break;
      }
    }

    if (gameResult === "continues") {
      let rows = matrix.map((row: any) => {
        return row.findIndex((item: any) => {
          return item === "";
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
        {matrix.map((item: any, row: number) => {
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
