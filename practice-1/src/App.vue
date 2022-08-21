<template>
  <div>
    <!-- message passed as props -->
    <FirstTest message='hi' />
    <Header />
  </div>

</template>

<script>
import FirstTest from './components/FirstTest.vue';
import Header from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    FirstTest,
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
