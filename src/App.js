import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from './actions/index';
import AddComment from './components/AddComment';
import Comment from './components/Comment';
import { v4 as uuidv4 } from 'uuid';
import "normalize.css";
import "./styles/styles.scss";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyDC05uADXngFeDOSNptiMl4OsC3xPQDahI",
//   authDomain: "commentproject-7b974.firebaseapp.com",
//   projectId: "commentproject-7b974",
//   storageBucket: "commentproject-7b974.appspot.com",
//   messagingSenderId: "695877058372",
//   appId: "1:695877058372:web:f709a4eb698ae69e7a6111"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

const pers1 = uuidv4();
const pers2 = uuidv4();
const pers3 = uuidv4();
const pers4 = uuidv4();

const data = [
  {
    id: pers1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: 1,
    score: 12,
    username: "amyrobson",
    userId: "amyrobson",
    repliedTo: "",
    parentComment: ""
  },
  {
    id: pers2,
    content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: 2,
    score: 5,
    username: "maxblagun",
    userId: "maxblagun",
    repliedTo: "",
    parentComment: ""
  },
  {
    id: pers3,
    content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: 3,
    score: 4,
    username: "ramsesmiron",
    userId: "ramsesmiron",
    repliedTo: "maxblagun",
    parentComment: pers2
  },
  {
    id: pers4,
    content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    createdAt: 4,
    score: 2,
    username: "juliusomo",
    userId: "juliusomo",
    repliedTo: "ramsesmiron",
    parentComment: pers3
  }
]

const App = () => {
  
  const state = useSelector((state)=> state);
  const dispatch = useDispatch();
  const {removeComment, addComment} = bindActionCreators(actionCreators, dispatch);
  useEffect(()=>{
    data.forEach((comment)=>{
      addComment(comment);
    })
  }, [])

  // state.comments.map((comment)=>{
  //   try {
  //     const docRef = addDoc(collection(db, "comments"), {
  //       username: comment.username,
  //       id: comment.id,
  //       userId: comment.userId,
  //       content: comment.content,
  //       score: comment.score,
  //       createdAt: comment.createdAt,
  //       repliedTo: comment.repliedTo,
  //       parentComment: comment.parentComment
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // })

  return (
    <div>
      <Comment />
      <AddComment />
    </div>
  )
}

export default App