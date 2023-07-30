import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk"
import appReducer from "./reducers/appReducer";
import cartReducer from "./reducers/cartReducer";

const reducer = combineReducers({
    app: appReducer,
    cart: cartReducer,
});

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;