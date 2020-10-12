import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const NextMove: React.FC<{}> = () => {
  //@ts-ignore
  const playerTurn = useSelector((state) => state.playerTurn);

  return <p>Next move is by {playerTurn}</p>;
};

export default NextMove;
