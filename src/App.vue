<template>
  <div id="app">
    <div id="daylist">
    
    <Header/>
    <List/>
    <hr/>
    <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
   Header,
   List,
   Footer
  }
}
</script>

<style>
#daylist{
  border: 2px solid #eee;
  width: 400px;
  margin: 50px auto;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
