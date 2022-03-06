

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