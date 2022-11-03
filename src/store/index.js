import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    user: userReducer,
})

export const store = createStore(
                                rootReducer, 
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                                );