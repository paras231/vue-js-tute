<template>
    <div>
        <h1>event handeling in vue js</h1>
        <button @click="sayHi">Click me</button>
        <button @click="sayHello">Hello</button>
    </div>
</template>

<script >

export default {
    methods: {
        // events handeling in vue
        sayHi() {
            console.log('hellow world');
        },
        sayHello: () => {
            alert("Hello how are you")
        }   //using arrow function
    }
}
</script>

<style  scoped>
</style>