<template>
  <Navbar />
  <div>
    <h1>About Page</h1>
    <div>
      <p v-for="item in list" :key="item.id">
       <p>{{ item.user }}</p> 
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
     return {
      list: [
      {
        id: 1,
        user: "Paras",
        age: 23,
      },
      {
        id: 2,
        user: "Shyam",
        age: 20,
      },
      {
        id: 3,
        user: "Lucky",
        age: 26,
      },
      {
        id: 4,
        user: "Golu",
        age: 29,
      },
    ]
     }
  },
};
</script>

<style scoped lang="scss"></style>
