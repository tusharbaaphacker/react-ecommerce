const initailState = {
    products: [],
    error: '',
    loading: false
}

const productReducer = (state = initailState, action) => {
    console.log(action, "from prducts action")
    return state;
}

export default productReducer;