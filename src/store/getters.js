/*
    服务于state
*/

export default{
    //已经完成的任务数量
    finishedCount(state){
        return state.todos.reduce((total,todo)=> total + (todo.finished?1:0),0)
    },
    //任务总数
    todosCount(state){
        return state.todos.length
    },
    //判断是否全选
    isCheck(state,getters){
        return getters.finishedCount === getters.todosCount  && getters.todosCount > 0
    }
}