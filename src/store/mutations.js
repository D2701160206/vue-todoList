/*
多个可以直接同步更新状态的方法  对象模块
*/

import {ADD_TODO,DELETE_TODO,SELECTED_ALL_TODO,DEL_FINISHED_TODO} from './mutations-type'

export default{
    [ADD_TODO](state,{todo}){//ADD_TODO并不是方法名,add_to
        state.todos.unshift(todo)
    },
    [DELETE_TODO](state,{index}){
        state.todos.splice(index,1)
    },
    [SELECTED_ALL_TODO](state,{isCheck}){
        state.todos.forEach(todo => {
            todo.finished = isCheck
        })
    },
    [DEL_FINISHED_TODO](state){
       state.todos = state.todos.filter(todo => !todo.finished)
    }
}