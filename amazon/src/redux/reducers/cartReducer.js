import initialState from "./initialState";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/action"

const appReducer = (currentState, action) => {
    const state = currentState || initialState?.cart;

    switch (action.type) {
        
        case ADD_TO_CART :
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload] ,
            };

        case REMOVE_FROM_CART : 
            return {
                ...state,
                cartItems:action.data,
            }

        default: return state;
    }
}

export default appReducer;