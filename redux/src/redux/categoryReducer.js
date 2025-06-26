const initailState = {
    categories: [],
    error: '',
    loading: false
}

const categoryReducer = (state = initailState, action) => {
    console.log(action, "from category action")
    if (action.type === "GET_CATEGORY") {
        return {
            ...state,
            categories: action.payload,
            loading: false
        }
    }
    return state;
};

export default categoryReducer;