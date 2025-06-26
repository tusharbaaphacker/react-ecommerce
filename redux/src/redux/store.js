import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import {thunk} from "redux-thunk"
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    category: categoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;