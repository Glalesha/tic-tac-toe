import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import changePlayerTurn from "../../store/actions/changePlayerTurn";
import changeMatrix from "../../store/actions/changeMatrix";
import addTurn from "../../store/actions/addTurn";

interface Props {
  mark: "o" | "x" | "";
  row: number;
  column: number;
  disabled: boolean;
}

const Cell: React.FC<Props> = ({ mark, row, column, disabled }) => {
  const dispatch = useDispatch();
  //@ts-ignore
  const playerTurn = useSelector((state) => state.playerTurn);
  //@ts-ignore
  const matrix = useSelector((state) => state.matrix);

  const placeMark = () => {
    if (mark || disabled) return;

    dispatch(addTurn({ matrix, playerTurn }));
    dispatch(changeMatrix({ playerTurn, row, column }));
    dispatch(changePlayerTurn());
  };

  return (
    <CellContent
      onClick={() => placeMark()}
      color={mark === "x" ? "#0fbe89" : "#ffc239"}
    >
      {mark}
    </CellContent>
  );
};

export default Cell;

interface CellContentProps {
  color: "#0fbe89" | "#ffc239";
}

const CellContent = styled.div<CellContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => {
    return props.color;
  }};
  font-size: 35px;
  cursor: pointer;
`;
