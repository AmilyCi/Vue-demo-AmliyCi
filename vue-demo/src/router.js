import Vue from 'vue';
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/1",
            name: "1",
            component: () => import("./views/1.HorseRaceLamp")
        },
        {
            path: "/2",
            name: "2",
            component: () => import('./views/2.Calculator/index.vue')
        },
        {
            path: "/3",
            name: "3",
            component: () => import('./views/3.BrandList')
        }
    ]
});