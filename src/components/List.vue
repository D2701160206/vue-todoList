<template>
  <div id="list">
    <Item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" />
  </div>
</template>

<script>
import Item from "./Item";
import localStorageUtil from './../utils/localStorageUtil'
import { mapState } from "vuex";
export default {
  name: "List",
  components: {
    Item
  },
 computed: {
   ...mapState(['todos'])
 },
 watch: {
   todos:{
     deep:true,
     handler:localStorageUtil.saveTODO
   }
 },
};
</script>

<style scoped>


#list{
  margin: 20px 0;
}

</style>