import { createAction } from 'redux-actions';
import axios from "axios";
export const ADD_TO_CART = createAction('ADD_TO_CART');
export const REMOVE_FROM_CART = createAction("REMOVE_FROM_CART");
export const RECEIVE_PRODUCT_DATA = createAction('RECEIVE_PRODUCT_DATA');
export const REQUEST_PRODUCT_DATA = createAction('REQUEST_PRODUCT_DATA');
export const ERROR_PRODUCT_DATA = createAction('ERROR_PRODUCT_DATA');

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    }
};

export const removeFromCart = (data) => {
    return{
        type: REMOVE_FROM_CART,
        data,
    }
}

export const addToWishlist = (data) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: data,
    }
}

export const removeFromWishList = (data) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: data,
    }
}

export const fetchProductData = () => {
    return (dispatch) => {
        dispatch({type: 'REQUEST_PRODUCT_DATA'});

        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            const data = res.data;
            const mappedData = data.map((item) => ({...item, addToCart: false, addToWishlist: false}));
            dispatch({type:'RECEIVE_PRODUCT_DATA', payload: mappedData});
        })
        .catch((err) => {
            dispatch({type: 'ERROR_PRODUCT_DATA', error: err.message });
        });
    };
};

