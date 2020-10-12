import React, { ReactNode } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types";

const GameData: React.FC<{}> = () => {
  const playerTurn = useSelector((state: RootState) => state.playerTurn);
  const gameResult = useSelector((state: RootState) => state.gameResult);

  let textValue: ReactNode | string;

  if (gameResult.status === "continues") {
    textValue = (
      <>
        Next move is by
        <Mark color={playerTurn === 1 ? "#0fbe89" : "#ffc239"}>
          {playerTurn === 1 ? "x" : "o"}
        </Mark>
      </>
    );
  } else if (gameResult.status === "draw") {
    textValue = "draw";
  } else if (gameResult.status === "win") {
    textValue = (
      <>
        <Mark color={playerTurn === 1 ? "#0fbe89" : "#ffc239"}>
          {playerTurn === 1 ? "o" : "x"}
        </Mark>
        has won
      </>
    );
  }

  return <Text>{textValue}</Text>;
};

export default GameData;

const Text = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 300;
`;

const Mark = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  color: ${(props) => props.color};
`;
