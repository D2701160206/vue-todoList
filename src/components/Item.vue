<template>
  
    
    <li  @mouseenter="isShow(true)"
       @mouseleave="isShow(false)"
        :style="{backgroundColor:bgcolor}"
       >
     <label>
       <input  type="checkbox" v-model="todo.finished">
       <span>{{todo.title}}</span>
     </label>
       <button v-show="Show" @click="deleteItem">删除</button>

   </li>
  
</template>

<script>

export default {
  name: "Item",
  props:{
    todo:Object,
    index:Number,
  },
  data() {
    return {
      Show:false,
      bgcolor: '#fff'
    }
  },
  components:{},
  methods: {
    deleteItem(){
      if(window.confirm(`确定要删除${this.todo.title}`)){
        this.$store.dispatch('deleteTodo',this.index)
      }
    },
    isShow(Show){
      this.Show = Show;
      this.bgcolor = Show ? '#ccc':'#fff'
    }
  },
 
};
</script>

<style scoped>
li{
  height: 36px;
  line-height: 36px;
  list-style: none;
  border: 1px solid #ccc;
  
  border-bottom: none;
  
}

li label{
  float: left;
}
li button{
  padding: 4px 10px;
  float: right;
  background-color: orange;
}
li:last-child{
  border-bottom:1px solid #ccc;
}
</style>