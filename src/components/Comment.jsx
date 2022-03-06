import {useSelector, useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { bindActionCreators } from "redux";
import {actionCreators} from '../actions/index';
import moment from 'moment';

// moment().format();

// var now = moment();
// var timetest = moment.unix(0);

export default ()=>{
    const [localState, setState] = useState({
        id: 0,
        content: "",
        score: 0,
        username: "",
        createdAt: 0,
        repliedTo: "",
        parentComment: 0
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
            content: localState.content,
            score: 0,
            username: "randomPerson",
            createdAt: Date.now(),
            repliedTo: "",
            parentComment: 0
        });
        setState((prevState)=>({...prevState, content: ""}));
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={localState.content}
                    onChange={onTextChange}
                >
                </textarea>
                <button>submit</button>

            </form>
        </div>
    )
}