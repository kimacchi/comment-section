import {useSelector, useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import {actionCreators} from '../actions/index';
import AddComment from "./AddComment";

export default ()=>{
    const [replyState, setState] = useState({isOn: false, parentId: "0", repliedTo: "", editing: false, editingId: undefined, current: undefined});
    const state = useSelector((state)=> state);
    const dispatch = useDispatch();

    const {editComment, upvoteComment, downvoteComment, replyComment, removeComment} = bindActionCreators(actionCreators, dispatch);

    const replyStateChange = (id, username, isOn = replyState.isOn)=>{
        setState({...replyState, isOn: !isOn, parentId: id, repliedTo: username});
    }
    const editChange = (id)=>{
        setState({...replyState, editing: !replyState.editing, editingId: id});
    }
    const onTextChange = (e)=>{
        const text = e.target.value;
        
    }
    const currentChange = (id)=>{
        setState({...replyState, current: id});
    }
    useEffect(()=>{
        if(replyState.isOn){
            setState({...replyState, isOn: !replyState.isOn});
        }
    }, [state])
    const handleSubmit = (e)=>{
        e.preventDefault();
        editComment(replyState.editingId, {content: e.target[0].value})
        setState({...replyState, editing: false});
    }
    const deleteComment = (id)=>{
        removeComment(id);
    }


    return (
        <div>
            {
                state.map((comment)=>{

                    return (
                        <div key={comment.id}>
                            {
                            replyState.editing && replyState.editingId === comment.id ? 
                            <div className={!!comment.parentComment ? "is-a-reply-edit comment-edit" : "comment-edit"}>
                                <div>
                                    <button onClick={()=> upvoteComment(comment.id)}>+</button>
                                    <span>{comment.score}</span>
                                    <button onClick={()=> downvoteComment(comment.id)}>-</button>
                                </div>
                                <div>
                                    <p>img</p>
                                    <p>{comment.username}</p>
                                    <div onClick={()=>deleteComment(comment.id)}>
                                        Delete
                                    </div>
                                    <div>
                                        Edit
                                    </div>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <textarea
                                            defaultValue={comment.content}
                                        ></textarea>
                                        <button>submit</button>
                                    </form>
                                </div>
                            </div>
                            : 
                            <div className={!!comment.parentComment ? "is-a-reply comment" : "comment"}>
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
                                    <div onClick={()=>deleteComment(comment.id)}>
                                        Delete
                                    </div>
                                    <div onClick={()=> editChange(comment.id)}>
                                        Edit
                                    </div>
                                </div>
                                <div>
                                    <p>{comment.content}</p>
                                </div>
                                {replyState.parentId === comment.id && replyState.isOn ? <AddComment repliedTo={`${replyState.repliedTo}`} parentComment={replyState.parentId}/> : undefined}
                            </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}