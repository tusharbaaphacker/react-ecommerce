import { applyMiddleware, combineReducers, createStore } from "redux"
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import {thunk} from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
};


const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)

console.log(store.getState(), "check")

store.subscribe(() => {
    console.log(store.getState(), "current state");
});
export {store};