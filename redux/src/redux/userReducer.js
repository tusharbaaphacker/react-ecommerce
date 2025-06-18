const intialState = {
    user: {
        username: "vivek",
        email: "vivek@gmail.com",
        password: "password"
    }
}


const userReducer = (state = intialState, action) => {
    console.log(action, "i am getting this")
    if (action.type === "TEST") {
        return {
            ...state,
            user: {
                ...state.user,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            }
        }
    }
    return state;
}

export default userReducer;