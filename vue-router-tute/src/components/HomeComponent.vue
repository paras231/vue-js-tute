<template>
  <Navbar />
  <div>
    <h1>HOME PAGE</h1>
    <!-- conditional rendering in vue js -->
    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <!-- one more example -->
    <h1 v-if="type === 'A'">A here</h1>
    <h1 v-else-if="type === 'B'">B here</h1>
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
      awesome: false,
      type: "B",
    };
  },
};
</script>

<style></style>
