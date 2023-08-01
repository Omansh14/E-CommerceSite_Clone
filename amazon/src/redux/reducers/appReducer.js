import initialState from "./initialState";

const appReducer = (currentState, action) => {
    const state = currentState || initialState.app;
    
    switch (action.type) {
        case 'REQUEST_PRODUCT_DATA':
            return {
                ...state,
                productLoadingState: 'LOADING',
            }

        case 'RECEIVE_PRODUCT_DATA':
            return {
                ...state,
                productLoadingState: 'LOADED',
                products: action.payload,
            }

        case 'ERROR_PRODUCT_DATA': 
            return {
                ...state,
                errorProductLoading : action.error,
            }
        
        default: return state;
    }
}

export default appReducer;