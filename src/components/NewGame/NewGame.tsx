import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import startNewGame from "../../store/actions/startNewGame";

const NewGame: React.FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(startNewGame());
      }}
    >
      Start New Game
    </Button>
  );
};

export default NewGame;

const Button = styled.button`
  margin-top: 50px;
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #9380b5;
  color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;
