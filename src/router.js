import {createRouter, createWebHistory} from 'vue-router'
import Home from "./pages/Home.vue";
import Runners from "./pages/Runners.vue";
import Models from "./pages/Models.vue";


const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Home,
        meta: {
          layout: "layout"
        }
    },
    {
        path: "/runners",
        name: "runners",
        component: Runners,
        meta: {
            layout: "layout"
        }
    },
    {
        path: "/models",
        name: "models",
        component: Models,
        meta: {
            layout: "layout"
        }
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router