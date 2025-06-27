const initailState = {
    categories: [],
    error: '',
    loading: false
}

const categoryReducer = (state = initailState, action) => {
    if (action.type === "GET_CATEGORY") {
        return {
            ...state,
            categories: action.payload,
            loading: false
        }
    }
    if (action.type === "ADD_CATEGORY") {
        return {
            ...state,
            categories: [...state.categories, action.payload],
            loading: false
        }
    }
    if (action.type === "UPDATE_CATEGORY") {
        return {
            ...state,
            categories: state.categories.map(category =>
                category._id === action.payload._id ? action.payload : category
            ),
            loading: false
        }
    }

    if (action.type === "DELETE_CATEGORY") {
        return {
            ...state,
            categories: state.categories.filter(category => category._id !== action.payload),
            loading: false
        }
    }

    return state;
};

export default categoryReducer;