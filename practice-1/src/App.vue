<template>
  <div>

    <EventHandler />
    <FetchData />
  </div>

</template>

<script>
import EventHandler from './components/EventHandlerPractice.vue';
import FetchData from './components/FetchData.vue';
export default {
  name: 'App',
  components: {
    EventHandler,
    FetchData
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
