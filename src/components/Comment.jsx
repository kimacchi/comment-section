import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { bindActionCreators } from "redux";
import {actionCreators} from '../actions/index';
import AddComment from "./AddComment";

export default ()=>{
    const [replyState, setState] = useState({isOn: false, parentId: "0", repliedTo: ""});
    const state = useSelector((state)=> state);
    const dispatch = useDispatch();

    const {editComment, upvoteComment, downvoteComment, replyComment, removeComment} = bindActionCreators(actionCreators, dispatch);

    const replyStateChange = (id, username, isOn = replyState.isOn)=>{
        setState({isOn: !isOn, parentId: id, repliedTo: username});
    }

    return (
        <div>
            {
                state.map((comment)=>{
                    /*
                        maybe you should change the add_comment action so that it arranges the array
                        in the correct reply order, using splice might be a good idea
                    */

                    return (
                        <div key={comment.id} className={!!comment.parentComment ? "is-a-reply comment" : "comment"}>
                            <div>
                                <button onClick={()=> upvoteComment(comment.id)}>+</button>
                                <span>{comment.score}</span>
                                <button onClick={()=> downvoteComment(comment.id)}>-</button>
                            </div>
                            <div>
                                <p>img</p>
                                <p>{comment.username}</p>
                                <div onClick={()=>replyStateChange(comment.id, comment.username)}>
                                    Reply
                                </div>
                            </div>
                            <div>
                                <p>{comment.content}</p>
                            </div>
                            {replyState.parentId === comment.id && replyState.isOn ? <AddComment repliedTo={`${replyState.repliedTo}`} parentComment={replyState.parentId}/> : undefined}
                        </div>
                    )
                })
            }
        </div>
    )
}