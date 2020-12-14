<template>
  <div id="footer">
   <label>
     <input class="check" type="checkbox" v-model="selectAllOrNot">
   </label>
     <span class="count">完成{{finishedCount}}/共计{{todosCount}}</span>
   <button class="del" @click="delFinished">删除完成</button>
  </div>
</template>

<script>
import localStorageUtil from './../utils/localStorageUtil'
import {mapGetters, mapActions} from 'vuex'
export default {
name:"Footer",
computed: {
  ...mapGetters(['finishedCount','todosCount','isCheck']),
  selectAllOrNot:{
    get(){
      return this.isCheck;
    },
    set(value){
       this.selectedAllTodo(value);
    }
  }
},

methods: {
  ...mapActions(['selectedAllTodo']),
  delFinished(){
    this.$store.dispatch('delFinishedTodo')
  },
  
},

}
</script>

<style scope>
#footer{
  height: 50px;
}
button{
  float: right;
  margin-right: 10px;
  background-color: red;
  color:#fff;
}
.check .count .del{
  vertical-align: middle;
}
</style>