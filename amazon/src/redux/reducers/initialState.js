const initialState = {
    app: {
        user: [],
        productLoadingState: 'UNINITIALIZED',
        products: [],
        errorProductLoading: "",
    },
    cart: {
        cartItems: [],
        wishListItems: [],
    }
};

export default initialState;