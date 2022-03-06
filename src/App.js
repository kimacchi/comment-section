import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from './actions/index';
import Comment from './components/Comment';
import "normalize.css";
import "./styles/styles.scss";

const App = () => {

  const state = useSelector((state)=> state);
  console.log(state);
  const dispatch = useDispatch();
  const {removeComment, addComment} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <button onClick={()=>addComment({id: 0,
    content: "",
    score: 0,
    username: "",
    createdAt: 0,
    repliedTo: "",
    parentComment: 0})}>dsfgdfg</button>
      <button onClick={()=>removeComment(0)}>kjlvcb</button>
      <Comment />
    </div>
  )
}

export default App