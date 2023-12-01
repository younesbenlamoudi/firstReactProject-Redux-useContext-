const myState = {
    x:0
};
export const reducer = (state = myState,action)=>{
    if(action.type === "INCRUMENT")return{x:state.x+1}
    if(action.type === "DECRUMENT")return{x:state.x-1}
    return state;
}