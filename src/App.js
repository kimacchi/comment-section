import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from './actions/index';
import AddComment from './components/AddComment';
import Comment from './components/Comment';
import "normalize.css";
import "./styles/styles.scss";

const App = () => {

  const state = useSelector((state)=> state);
  const dispatch = useDispatch();
  const {removeComment, addComment} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <AddComment />
      <Comment />
    </div>
  )
}

export default App