export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to Basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_TO_BASKET":
      // Logic for removing item to Basket
      return { state };
    default:
      return state;
  }
}

export default reducer;
