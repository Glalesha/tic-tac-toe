const goToTurn = (payload: any) => {
  return {
    type: "GO_TO_TURN",
    payload,
  };
};

export default goToTurn;
