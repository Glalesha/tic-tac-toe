import React from "react";
import styled from "styled-components";
import Grid from "../Grid/Grid";
import GameData from "../GameData/GameData";
import GameHistory from "../GameHistory/GameHistory";
import NewGame from "../NewGame/NewGame";
import { useSelector, useDispatch } from "react-redux";

const Main: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Title>
        tic <GreenText>tac</GreenText> toe
      </Title>
      <GameData />
      <Grid />
      <NewGame />
      <GameHistory />
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
