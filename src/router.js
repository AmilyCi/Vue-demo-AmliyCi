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
            component: () => import("./views/HorseRaceLamp")
        },
        {
            path: "/2",
            name: "2",
            component: () => import('./views/Calculator/index.vue')
        },
        {
            path: "/3",
            name: "3",
            component: () => import('./views/BrandList')
        },
        {
            path: "/4",
            name: "4",
            component: () => import('./views/Animation/index.vue')
        },
        {
            path: "/5",
            name: "5",
            component: () => import('./views/AnimationList')
        },
        {
            path: "/6",
            name: "6",
            component: () => import('./views/SwitchComponent/index.vue')
        },
        {
            path: "/7",
            name: "7",
            component: () => import('./views/BallAnimation/index.vue')
        },
        {
            path: "/8",
            name: "8",
            component: () => import('./views/CommentList/index.vue')
        }

    ]
});