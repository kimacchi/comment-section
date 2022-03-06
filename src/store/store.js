import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import commentsReducer from "../reducers/comments";

export const store = createStore(commentsReducer, applyMiddleware(thunk));