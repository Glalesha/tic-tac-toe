const addTurn = (payload: any) => {
  return {
    type: "ADD_TURN",
    payload,
  };
};

export default addTurn;
