import {useSelector, useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import {actionCreators} from '../actions/index';
import moment from 'moment';

// moment().format();

// var now = moment();
// var timetest = moment.unix(0);

export default (repliedTo="", parentComment="0")=>{
    const [localState, setState] = useState({
        id: 0,
        content: "",
        userId: "",
        score: 0,
        username: "",
        createdAt: 0,
        repliedTo: "",
        parentComment: "0"
    })
    const state = useSelector((state)=>state);
    const dispatch = useDispatch();
    const {addComment} = bindActionCreators(actionCreators, dispatch);
    


    const onTextChange = (e)=>{
        const text = e.target.value;
        setState((prevState)=>({...prevState, content: text}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addComment({
            id: uuidv4(),
            content: !!repliedTo.repliedTo ? `${localState.content}`: localState.content,
            score: 0,
            userId: "",
            username: "randomPerson",
            createdAt: Date.now(),
            repliedTo: repliedTo.repliedTo ? repliedTo.repliedTo : "",
            parentComment: repliedTo.parentComment ? repliedTo.parentComment : ""
        });
        setState((prevState)=>({...prevState, content: ""}));
    }
    
    console.log(repliedTo);

    return (
        <div className={repliedTo.isareply ? "add-comment-wrapper-reply" : "add-comment-wrapper"}>
        <div className={repliedTo.isareply ?  "add-comment-div-reply" : "add-comment-div"}>
            <form onSubmit={handleSubmit} className={repliedTo.isareply ?  "add-comment-div-form-reply" : "add-comment-div-form"}>
            <div className={repliedTo.isareply ?  "add-comment-div-image-reply" : "add-comment-div-image"}>

            </div>
                <textarea
                    // defaultValue={localState.content}
                    rows="4"
                    placeholder="Add a comment..."
                    cols="50"
                    value={localState.content}
                    onChange={onTextChange}
                    className={repliedTo.isareply ? "add-comment-div-form-textarea-reply" : "add-comment-div-form-textarea"}
                >
                </textarea>
                <button className={repliedTo.isareply ? "add-comment-div-form-button-reply" : "add-comment-div-form-button"}>SEND</button>
            </form>
        </div>
        </div>
    )
}