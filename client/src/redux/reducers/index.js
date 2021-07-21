import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    posts: postReducer,
    authorize: authReducer
}) 

export default reducers