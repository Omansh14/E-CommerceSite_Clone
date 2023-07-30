import initialState from "./initialState";

const appReducer = (currentState, action) => {
    const state = currentState || initialState.app;
    
    switch (action.type) {
        case 'REQUEST_PRODUCT_DATA':
            return {
                ...state,
                productLoadingState: 'Loading',
            }

        case 'RECEIVE_PRODUCT_DATA':
            return {
                ...state,
                productLoadingState: 'Loaded',
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