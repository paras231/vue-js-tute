<template>
    <Navbar />
    <div class="container">
        <div class="main">
            <h1>Test component</h1>
            <h3>{{message}}</h3>
            <span>Likes:{{likes}}</span>
        </div>
        <input type="text" ref="input">
        <button ref="btn">
            click me
        </button>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from "./Navbar.vue";

const input = ref(null);
const btn = ref(null);
const props = defineProps({
    message: String,
    likes: Number
})

// we can use ref for handeling eventlisteners

onMounted(() => {
    input.value.style.background = 'red'
    btn.value.addEventListener("click", (() => {
        btn.value.style.background = 'yellow';  // working
        console.log('clicked');
    }))
})



</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    background-color: rgb(132, 125, 125);
}
</style>