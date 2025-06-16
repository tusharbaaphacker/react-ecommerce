// import {createStore} from "redux"
// import counterReducer from "./reducer.js";
// const store  = createStore(counterReducer);
// export default store;



























import { applyMiddleware, combineReducers, createStore } from "redux"
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    product: productReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState(), "check")

store.subscribe(() => {
    console.log(store.getState(), "current state");
});
export default store;