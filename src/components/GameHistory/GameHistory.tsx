import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import goToTurn from "../../store/actions/goToTurn";

const GameHistory: React.FC<{}> = () => {
  //@ts-ignore
  const gameHistory = useSelector((state) => state.gameHistory);
  const dispatch = useDispatch();

  return (
    <>
      <Title>Current Game History</Title>
      <TurnList>
        <TurnItem>game start</TurnItem>
        {gameHistory.map((item: any) => {
          return (
            <TurnItem key={item.id}>
              <TurnButton
                onClick={() => {
                  dispatch(goToTurn({ id: item.id }));
                }}
              >
                go to move #{item.id}
              </TurnButton>
            </TurnItem>
          );
        })}
      </TurnList>
    </>
  );
};

export default GameHistory;

const Title = styled.h2`
  color: white;
  font-size: 35px;
`;

const TurnList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TurnItem = styled.li`
  display: flex;
  align-items: center;
  color: white;
  font-size: 15px;

  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: #24b99d;
  }
`;

const TurnButton = styled.button`
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;
  font-size: 15px;
  outline: none;
  cursor: pointer;
`;
