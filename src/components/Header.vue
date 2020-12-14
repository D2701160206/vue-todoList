<template>
  <div id="header">
    
    <input type="text" placeholder="请输入任务清单"
    v-model="title"
    @keyup.enter="addItem"
    >
    
    
  </div>
</template>

<script>
export default {
name:"Header",
data() {
  return {
    title:''
  }
},
methods: {
  addItem(){
    // 判段输入是否为空
    const title = this.title.trim();
  if(!title){
    alert('输入不能为空');
    return;
  }
    //生成一个todo对象
    let todo = {title,finished:false}

    //添加
    this.$store.dispatch('addTodo',todo)

    //清空
    this.title = ''
  }
},
}
</script>

<style scope>
#header{
  margin: 10px;
}
#header input {
  width: 90%;
  height: 25px;
  margin-left: 5%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  /* text-align: center; */
}
button{
  background-color: #eee;
  /* float: right; */
  margin-left: 20px;
}
</style>