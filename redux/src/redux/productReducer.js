const initailState = {
    products: [],
    error: '',
    loading: false
}

const productReducer = (state = initailState, action) => {
    console.log(action, "from prducts action")
    if(action.type === "PRODUCT"){
        return {
            ...state,
            products: action.payload,
            loading:false
        }
    }
    return state;
}

export default productReducer;