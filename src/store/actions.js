/*
包含多个间接更新state 的方法  对象模块
*/

import {ADD_TODO,DELETE_TODO,SELECTED_ALL_TODO,DEL_FINISHED_TODO} from './mutations-type'

export default{
    addTodo({commit},todo){
        commit(ADD_TODO,{todo});
    },
    deleteTodo({commit},index){
        commit(DELETE_TODO,{index})
    },
    selectedAllTodo({commit},isCheck){
        commit(SELECTED_ALL_TODO,{isCheck})
    },
    delFinishedTodo({commit}){
        commit(DEL_FINISHED_TODO)
    }

}