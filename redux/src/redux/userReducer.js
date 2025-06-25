const intialState = {
    user: {
        username: "",
        email: "",
        password: "",
        token: "",
        message: ""
    },
}


const userReducer = (state = intialState, action) => {
    console.log(action, "i am getting this")
    if (action.type === "REGISTER") {
        return {
            ...state,
            user: {
                ...state.user,
                username: action.payload.user.username || state.user.username,
                email: action.payload.user.email || state.user.email, 
                password: action.payload.user.password || state.user.password,
                token: action.payload.token,
                message: action.payload.message
            }
        }
    }


     if (action.type === "LOGIN") {
        return {
            ...state,
            user: {
                ...state.user,
                username: action.payload.user.username || state.user.username,
                email: action.payload.user.email || state.user.email, 
                password: action.payload.user.password || state.user.password,
                token: action.payload.token,
                message: action.payload.message
            }
        }
    }



    if (action.type === "PROFILE") {
        return {
            ...state,
            user: {
                ...state.user,
                username: action.payload.user.username || state.user.username,
                email: action.payload.user.email || state.user.email, 
                password: action.payload.user.password || state.user.password,
                token: action.payload.token,
                message: action.payload.message
            }
        }
    }
    return state;
}

export default userReducer;