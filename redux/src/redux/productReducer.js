const initailState = {
    products: [],
    error: '',
    loading: false
}

const productReducer = (state = initailState, action) => {
    console.log(action, "from prducts action")
    if(action.type === "GET_PRODUCT"){
        return {
            ...state,
            products: action.payload,
            loading:false
        }
    }
    if(action.type === "ADD_PRODUCT"){
        return {
            ...state,
            products: [...state.products, action.payload],
            loading:false
        }
    }
    return state;
};

export default productReducer;