// const intialState = {
//     count:0,
// }


// const counterReducer = (state = intialState, action) => {
//     switch(action.type){
//         case "INCREMENT": 
//             return {...state, count: state.count + 1};
//         case "DECREMENT":
//             return {...state, count: state.count - 1};
//         case "RESET":
//             return {...state, count: 0}
//         default: 
//             return state;
//     }
// }

// export default counterReducer;











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