import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HelloWorld,
    props: { msg: 'Welcome to Your Vue.js App' },
  },
];

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return { x: 0, y: 0 };
  },
});
