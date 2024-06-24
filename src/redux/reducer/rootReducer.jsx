//Old version of redux-react

import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    //productReducer is the key and productReducer is the value
    productR: productReducer
});