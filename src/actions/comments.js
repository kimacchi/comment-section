

export const addComment = (comment)=>{
    return (dispatch)=>{
        dispatch({
            type: "ADD_COMMENT",
            comment
        })
    }
}

export const removeComment = (id)=>{
    return (dispatch) => {
        dispatch({
            type: "REMOVE_COMMENT",
            id
        })
    }
}

export const editComment = (id, updates)=>{
    return (dispatch) => {
        dispatch({
            type: "EDIT_COMMENT",
            id,
            updates,
        })
    }
}

export const upvoteComment = (id)=>{
    return (dispatch)=>{
        dispatch({
            type: "UPVOTE_COMMENT",
            id
        })
    }
}

export const downvoteComment = (id)=>{
    return (dispatch)=>{
        dispatch({
            type: "DOWNVOTE_COMMENT",
            id
        })
    }
}

export const replyComment = (id, comment)=>{
    return (dispatch)=>{
        dispatch({
            type: "REPLY_COMMENT",
            comment: {
                ...comment,
                parentComment: id,
            }
        })
    }
}