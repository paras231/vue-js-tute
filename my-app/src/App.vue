<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ToDoItem label="My ToDo Item" :done="true" />
    <ToDoItem label="My ToDo Item" :done="false" />
    <ToDoItem label="My ToDo Item" :done="true" />
    <ToDoItem label="New Todo Item " :done="false" />
    <MyPractice />
  </div>
</template>

<script>

import ToDoItem from './components/ToDoItem.vue';
import MyPractice from './components/MyPractice.vue';
export default {
  name: 'App',
  components: {
    ToDoItem,
    MyPractice
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
