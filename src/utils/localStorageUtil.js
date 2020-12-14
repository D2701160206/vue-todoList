const TODO = 'todo_list'

export default {
    readTODO(){
       return JSON.parse(localStorage.getItem(TODO) || '[]');
    },
    saveTODO(todos){
        localStorage.setItem(TODO,JSON.stringify(todos));
    }

}