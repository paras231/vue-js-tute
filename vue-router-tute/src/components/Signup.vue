<template>
  <Navbar />
  <div class="form-wrapper" @submit="handleSubmit">
    <form action="">
      <input type="text" placeholder="username" v-model="formData.username" />
      <input type="email" placeholder="Email" v-model="formData.email" />
      <input
        type="password"
        placeholder="Password"
        v-model="formData.password"
      />
      <p>Please Select Gender</p>
      <input type="radio" v-model="formData.gender" />
      <label for="Male">Male</label>
      <input type="radio" v-model="formData.gender" />
      <label for="Female">Female</label>
      <button type="submit">Submit</button>
    </form>
  </div>
  <!-- render the form data here -->
  <p>{{ formData.username }}</p>
  <p>{{ formData.email }}</p>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        gender: "",
      },
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vmax;
}
form {
  display: flex;
  flex-direction: column;
  gap: 2vmax;
}
input {
  width: 13vmax;
}
button {
  width: 13vmax;
}
</style>
