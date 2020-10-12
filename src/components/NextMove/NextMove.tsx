import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const NextMove: React.FC<{}> = () => {
  //@ts-ignore
  const playerTurn = useSelector((state) => state.playerTurn);

  return (
    <NextMoveText>
      Next move is by
      <Mark color={playerTurn === 1 ? "#0fbe89" : "#ffc239"}>
        {playerTurn === 1 ? "x" : "o"}
      </Mark>
    </NextMoveText>
  );
};

export default NextMove;

const NextMoveText = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 300;
`;

const Mark = styled.span`
  margin-left: 10px;
  color: ${(props) => props.color};
`;
