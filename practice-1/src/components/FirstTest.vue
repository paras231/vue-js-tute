<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script >
export default {
  name: 'FirstTest',
  props: {
    message: { type: String }
  }
}
</script>

<style  scoped>
</style>