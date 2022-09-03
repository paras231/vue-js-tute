import {createRouter,createWebHistory} from 'vue-router';
import HomeComponent from "../components/HomeComponent.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
const routes = [
    {
        path:"/",
        name:"Home",
        component:HomeComponent
    },
    {
        path:"/about",
        name:"About",
        component:About
    },
    {
        path:"/contact",
        name:"Contact",
        component:Contact
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;