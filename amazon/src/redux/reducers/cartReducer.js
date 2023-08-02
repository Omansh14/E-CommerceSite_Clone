import initialState from "./initialState";

const appReducer = (currentState, action) => {
  const state = currentState || initialState?.cart;

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: action.payload,
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishListItems: action.payload,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishListItems: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
