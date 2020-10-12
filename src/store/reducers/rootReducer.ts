import { RootState } from "../../types";
import { createGrid } from "../../api/index";

const grid = createGrid(3, 3);

const initState: RootState = {
  grid,
  playerTurn: 1,
  gameResult: "continues",
  gameHistory: [],
};

export default function rootReducer(state = initState, action: any) {
  switch (action.type) {
    case "CHANGE_GRID":
      return {
        ...state,
        grid: state.grid.map((rowItem: any, rowNumber: number) => {
          return rowItem.map((columnItem: any, columnNumber: number) => {
            if (
              columnNumber === action.payload.column &&
              rowNumber === action.payload.row
            ) {
              return action.payload.playerTurn;
            } else {
              return columnItem;
            }
          });
        }),
      };

    case "CHANGE_PLAYER_TURN":
      return {
        ...state,
        playerTurn: state.playerTurn === 1 ? 2 : 1,
      };

    case "SET_GAME_RESULT":
      return {
        ...state,
        gameResult: action.payload.gameResult,
      };

    case "START_NEW_GAME":
      return {
        ...state,
        playerTurn: "x",
        gameResult: "continues",
        grid,
      };

    case "ADD_TURN":
      const newId = state.gameHistory.length
        ? +state.gameHistory[state.gameHistory.length - 1].id + 1
        : 1;
      return {
        ...state,
        gameHistory: [
          ...state.gameHistory,
          {
            id: newId,
            grid: action.payload.grid,
          },
        ],
      };

    case "GO_TO_TURN":
      return {
        ...state,
        //@ts-ignore
        grid: state.gameHistory.find((item: any) => {
          return item.id === action.payload.id;
        }).grid,
        gameHistory: state.gameHistory.filter((item: any) => {
          return item.id < action.payload.id;
        }),
        playerTurn: action.payload.playerTurn,
      };

    default:
      return state;
  }
}
