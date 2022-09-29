<template>
    <Navbar />
    <div>
        <h1>Will Learn ABout Composition Api</h1>
        <div>
            <li v-for="fruit in items">
                {{fruit}}
            </li>
        </div>
        <button @click="increment">Increase</button>
        <span>{{state.count}}</span>
    </div>

</template>

<script setup >

// while using setup ,we are actually using composition api so don't need to use export default.
// we can use arrow functions easily.
// we can define any kind of data by using ref.
import Navbar from "./Navbar.vue";
import { ref, reactive, computed, onMounted } from "vue";
import axios from "axios";

const items = ref(["Apple", "Banana", "Guava", "Pineapple", "Cherry", "Grapes"])

const state = reactive({ count: 0 }) // creates an object called 'state' and assign count:0 as key value pair.

// console.log(state) 
const increment = () => {
    state.count++;
}


// using array with reactive->

const myArray = reactive({
    arr: ["Name", "Email", "Password"]
})

const updatedMyarray = myArray.arr.concat("Username");
console.log(updatedMyarray);// gives new updated array.


// fetching data from api  ->

let posts = reactive({
    postsArray  :[]
});

const fetchPosts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return  posts.postsArray.concat(response.data)  
}


fetchPosts();

console.log(posts.postsArray);
</script>

<style scoped>

</style>