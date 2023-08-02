import axios from "axios";

export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data,
    }
};

export const removeFromCart = (data) => {
    return{
        type: 'REMOVE_FROM_CART',
        payload: data,
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

export const fetchProductData = (item) => {
    return (dispatch) => {
        dispatch({type: 'REQUEST_PRODUCT_DATA'});

        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            const data = res.data;
            const mappedData = data.map((item) => ({...item, addToCart: false, addToWishlist: false}));
            const filteredData = mappedData.filter((ele) => ele.category === item);
            dispatch({type:'RECEIVE_PRODUCT_DATA', payload: item? filteredData : mappedData});
        })
        .catch((err) => {
            dispatch({type: 'ERROR_PRODUCT_DATA', error: err.message });
        });
    };
};

