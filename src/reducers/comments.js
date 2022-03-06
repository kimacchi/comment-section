
const templateState = {
    id: 0,
    content: "",
    // commentId: 0,
    score: 0,
    username: "",
    createdAt: 0,
    repliedTo: "",
    parentComment: 0
};

const defaultState= [];

const replyTemplate= {
    id: 1,
    content: "",
    score: 0,
    username: "",
    parentComment: "",
    createdAt: 0
}


export default (state=defaultState, action)=>{
    switch(action.type){
        case "ADD_COMMENT":
            return [...state, action.comment];
        case "EDIT_COMMENT":
            return state.map((comment)=>{
                if(comment.id === action.comment.id){
                    return {...comment, ...action.updates}
                } else {
                    return comment;
                }
            });
        case "REMOVE_COMMENT":
            return state.filter((comment)=> comment.id !== action.id);
        case "UPVOTE_COMMENT":
            return state.map((comment) => {
                if(comment.id === action.id){
                    return {...comment, score: comment.score + 1}
                } else {
                    return comment;
                }
            })
        case "DOWNVOTE_COMMENT":
            return state.map((comment) => {
                if(comment.id === action.comment.id){
                    return {...comment, score: comment.score - 1}
                } else {
                    return comment;
                }
            })
        case "REPLY_COMMENT":
            return [...state, action.comment];
        default:
            return state;
    }
}