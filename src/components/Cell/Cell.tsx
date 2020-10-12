import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import changePlayerTurn from "../../store/actions/changePlayerTurn";
import changeGrid from "../../store/actions/changeGrid";
import addTurn from "../../store/actions/addTurn";
import { RootState } from "../../types";

interface Props {
  mark: 0 | 1 | 2;
  row: number;
  column: number;
  disabled: boolean;
}

const Cell: React.FC<Props> = ({ mark, row, column, disabled }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef(null) as any;

  const dispatch = useDispatch();
  const playerTurn = useSelector((state: RootState) => state.playerTurn);
  const grid = useSelector((state: RootState) => state.grid);

  useEffect(() => {
    //@ts-ignore
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
      canvasRef.current.width = 50;
      canvasRef.current.height = 50;
    }
  }, []);

  useEffect(() => {
    drawMark(mark);
  }, [mark]);

  const placeMark = () => {
    if (mark || disabled) return;
    console.log(playerTurn, row, column);

    dispatch(addTurn({ grid, playerTurn }));
    dispatch(changeGrid({ playerTurn, row, column }));
    dispatch(changePlayerTurn());
  };

  const drawMark = (mark: any) => {
    if (!mark) {
      ctx.current.fillStyle = "#4d4ddb";
      ctx.current.fillRect(0, 0, 50, 50);
    } else if (mark === 1) {
      ctx.current.strokeStyle = "#0fbe89";
      ctx.current.beginPath();
      ctx.current.moveTo(10, 10);
      ctx.current.lineTo(40, 40);
      ctx.current.closePath();
      ctx.current.stroke();
      ctx.current.beginPath();
      ctx.current.moveTo(40, 10);
      ctx.current.lineTo(10, 40);
      ctx.current.closePath();
      ctx.current.stroke();
    } else if (mark === 2) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = "#ffc239";
      ctx.current.arc(25, 25, 20, Math.PI * 2, false);
      ctx.current.stroke();
      ctx.current.closePath();
    }
  };

  return (
    <CellContent
      onClick={() => placeMark()}
      color={mark === 1 ? "#0fbe89" : "#ffc239"}
    >
      <canvas ref={canvasRef}></canvas>
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
