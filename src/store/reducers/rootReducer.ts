const initState: any = {
  matrix: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  playerTurn: "x",
  gameResult: "continues",
  gameHistory: [],
};

export default function rootReducer(state = initState, action: any) {
  switch (action.type) {
    case "CHANGE_MATRIX":
      return {
        ...state,
        matrix: state.matrix.map((rowItem: any, rowNumber: number) => {
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
        playerTurn: state.playerTurn === "x" ? "o" : "x",
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
        matrix: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      };

    case "ADD_TURN":
      const newId = state.gameHistory.length
        ? +state.gameHistory[state.gameHistory.length - 1].id + 1
        : 1;
      console.log(action.payload.matrix);
      return {
        ...state,
        gameHistory: [
          ...state.gameHistory,
          {
            name: `move to ${newId}`,
            id: newId,
            matrix: action.payload.matrix,
          },
        ],
      };

    case "GO_TO_TURN":
      return {
        ...state,
        matrix: state.gameHistory.find((item: any) => {
          return item.id === action.payload.id;
        }).matrix,
        gameHistory: state.gameHistory.filter((item: any) => {
          return item.id < action.payload.id;
        }),
        playerTurn: action.payload.playerTurn,
      };

    default:
      return state;
  }
}
