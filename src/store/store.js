import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import commentsReducer from "../reducers/comments";
import auth from "../reducers/auth";

export const store = createStore(combineReducers({
    comments: commentsReducer,
    auth: auth
}), applyMiddleware(thunk));