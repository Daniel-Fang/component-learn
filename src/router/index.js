import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Single from '../views/Single.vue';
import Compose from '../views/Compose.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single',
    name: 'single',
    component: Single
  },
  {
    path: '/compose',
    name: 'compose',
    component: Compose
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
})

router.beforeEach((to, from, next) => {
  from.meta.savedPosition = { x: 0, y: document.documentElement.scrollTop };
  next();
})

export default router;
