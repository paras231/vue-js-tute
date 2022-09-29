import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Signup from "../components/Signup.vue";
import Register from "../components/Register.vue";
import Form from "../components/Form.vue";
import CompositionApi from "../components/CompositionApi.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/api",
    name: "CompositionApi",
    component: CompositionApi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
