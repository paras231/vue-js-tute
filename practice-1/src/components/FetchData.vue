<template>
  <div>
    <h1>Fetching data in vue</h1>
    <div v-for="post in posts" :key="post.id">
      <div class="wrapper">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
  <div v-for="crop in crops" :key="crop._id">
    <p>{{ crop?.cropName }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      crops: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.posts = response.data;
    // console.log(response.data);
    // fetching second api
    const response2 = await axios.get(
      "https://farm-app4.herokuapp.com/api/v1/all/crops/admin"
    );
    this.crops = response2.data.crops;
    console.log(response2.data.crops);
  },
};
</script>

<style scoped>
.wrapper {
  width: 40vmax;
  text-align: center;
  display: grid;
  justify-content: center;
  margin-left: 20%;
}
</style>
