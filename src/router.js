import Vue from 'vue';
import Router from 'vue-router';
import Feed from './views/Feed.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/activity',
    },
    {
      path: '/activity',
      name: 'activity',
      component: Feed
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Feed
    },
    {
      path: '/photos',
      name: 'photos',
      component: Feed
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Feed
    },
    {
      path: '/tweaks',
      name: 'tweaks',
      component: Feed
    },
    {
      path: '/questions',
      name: 'questions',
      component: Feed
    },
    {
      path: '/follows',
      name: 'follows',
      component: Feed
    }
    //{
    //  path: '/about',
    //  name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //  component: () =>
    //    import(/* webpackChunkName: 'about' */ './views/About.vue')
    //}
  ]
});
