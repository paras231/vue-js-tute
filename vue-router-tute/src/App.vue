<template>
  <div class="nav">
    <router-link class="link-style" to="/"> Home </router-link>
    <router-link class="link-style" to="/about"> About </router-link>
    <router-view />
  </div>
</template>

<script></script>

<style scoped>
.link-style {
  color: red;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20vw;
}
</style>
