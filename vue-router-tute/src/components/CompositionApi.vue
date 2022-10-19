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
        <button @click="awesome = !awesome">Click Me</button>
        <h1 v-if="awesome">Vue is awesome</h1>


        <h2 v-else>oh No</h2>
        <!-- conditional class in vue -->
        <!--  class .danger is applied when we click on the button toggle class -->
        <p :class="{ danger:isActive}">hello world</p>
        <button @click="isActive=!isActive">Toggle Class</button>
        <!-- handeling input -->
        <h1>{{message}}</h1>
        <input type="text" v-model="message">

        <div v-for="user in data" :key="user?.id">
            <p v-if="data.length==0">Loading...</p>
            <p v-else>{{user.title}}</p>
        </div>


    </div>

    <div>
        <Test message="Hello this is test page"  likes="300"/> 
    </div>
   
</template> 
 
<script setup >

// while using setup ,we are actually using composition api so don't need to use export default.
// we can use arrow functions easily.
// we can define any kind of data by using ref.
import Navbar from "./Navbar.vue";
import Test from "./Test.vue";

import { ref, reactive, computed, onMounted } from "vue";
import axios from "axios";



const data = ref([]);

// working fetch logic    (it works like useEffect in react)
onMounted(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.value = res.data
})

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



const awesome = ref(false);

const isActive = ref(false);

const message = ref("");
const loading = ref(false);

const showHome = false;
//  using props in composition api->

defineProps({
    title: String,

})
</script>

<style lang="scss" scoped>
.danger {
    color: red;
}

.error {
    color: yellow;
}
</style>