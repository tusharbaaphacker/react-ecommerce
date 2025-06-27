const initailState = {
    products: [],
    error: '',
    loading: false
}

const productReducer = (state = initailState, action) => {
    console.log(action, "from prducts action")
    if (action.type === "GET_PRODUCT") {
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    }
    if (action.type === "ADD_PRODUCT") {
        return {
            ...state,
            products: [...state.products, action.payload],
            loading: false
        }
    }


    if (action.type === "UPDATE_PRODUCT") {
        return {
            ...state,
            products: state.products.map(product =>
                product.id === action.payload.id ? action.payload : product
            ),
            loading: false

        }
    }

    if (action.type === "DELETE_PRODUCT") {
        return {
            ...state,
            products: state.products.filter(product => product._id !== action.payload),
            loading: false
        }
    }
    
    return state;
};

export default productReducer;