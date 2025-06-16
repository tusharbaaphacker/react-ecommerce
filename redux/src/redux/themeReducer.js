

const initialState = {
    theme:"light"
}

const themeReducer = (state = initialState, action) => {
    console.log(action, 'fromm')
    if(action.type === "SET_THEME"){
        return {
            ...state, 
            theme: action.payload.theme
        }
    }
    return state;
}

export default themeReducer;