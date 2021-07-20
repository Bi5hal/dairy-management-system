import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const App = () => import("./components/App");
const opts = {
    mode: "history",
    routes: [
        {
            path: "/",
            component: App
        }
    ]
}

export default new VueRouter(opts)
