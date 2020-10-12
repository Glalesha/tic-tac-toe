import React from "react";
import styled from "styled-components";
import Grid from "../Grid/Grid";
import NewGame from "../NewGame/NewGame";
import GameHistory from "../GameHistory/GameHistory";
import NextMove from "../NextMove/NextMove";
import { useSelector, useDispatch } from "react-redux";

const Main: React.FC<{}> = () => {
  //@ts-ignore
  const gameResult = useSelector((state) => state.gameResult);

  return (
    <Wrapper>
      <Title>
        tic <GreenText>tac</GreenText> toe
      </Title>
      <NextMove />
      <Grid />
      <NewGame />
      <GameHistory />
      <h1>{gameResult}</h1>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #4d4ddb;
`;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
`;

const GreenText = styled.span`
  color: #0ac57f;
`;
