import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


// import in all my pages
import Faults from './components/Faults';
import Page2 from './components/Page2';
import Home from './components/Home';


Vue.config.productionTip = false;

// define routers
const routes = [
    {
        path: '/', component : Home
    },
    {
        path:'/faults', component: Faults
    },
    {
        path:'/page2', component: Page2
    }
]

// create the router
const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')