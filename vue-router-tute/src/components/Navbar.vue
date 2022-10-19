<template>
  <div class="main-wrapper">
    <ul>
      <li>
        <router-link class="nav-item" to="/">HOME</router-link>
      </li>
      <li>
        <router-link class="nav-item" to="/about">ABOUT</router-link>
      </li>
      <li>
        <router-link class="nav-item" to="/register">Register</router-link>
      </li>
      <li>
        <router-link class="nav-item" to="/form">Form</router-link>
      </li>
      <li>
        <router-link class="nav-item" to="/api">Composition API</router-link>

      </li>
      <li>
        <router-link class="nav-item" to="/test">Test</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin mobile {
  @media (min-width:320px) and (max-width: 480px) {
    @content;
  }
}

.main-wrapper {
  background-color: rgb(255, 106, 0);
  width: 100%;
  height: 5vmax;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: 5vmax;
    list-style-type: none;
  }

  ul>li:hover {
    cursor: pointer;
    color: white;
  }

  @include mobile {
    display: none;
  }
}

.nav-item {
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
}
</style>
