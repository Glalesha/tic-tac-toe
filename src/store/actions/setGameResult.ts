const setGameResult = (gameResult: any) => {
  return {
    type: "SET_GAME_RESULT",
    payload: {
      gameResult,
    },
  };
};

export default setGameResult