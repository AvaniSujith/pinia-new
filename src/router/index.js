import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'home',
            component: HomeView,
        },
        {
            path:'/about',
            name: 'about',
            component: AboutView,
        }
    ]
})

export default router;