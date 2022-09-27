<template>
  <Navbar />
  <div class="wrapper">
    <form @submit="handleSubmit">
      <input type="text" placeholder="Username" v-model="formData.username" />
      <input type="email" placeholder="Email" v-model="formData.email" />
      <input type="text" placeholder="Phone" v-model="formData.phone" />
      <input
        type="password"
        placeholder="Password"
        v-model="formData.password"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      formData: {
        username: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    // working properly
    async handleSubmit(e) {
      e.preventDefault();
       try {
        const { data } = await axios.post(
        "https://travel-andman.herokuapp.com/api/user/signup",
        {
          username: this.formData.username,
          email: this.formData.email,
          phone: this.formData.phone,
          password: this.formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
       } catch(error){
         console.log(error);
       }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vmax;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2vmax;

  input {
    width: 16vmax;
  }

  button {
    cursor: pointer;
  }
}
</style>
