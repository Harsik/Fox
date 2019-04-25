import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: require('@/components/HelloWorld').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: require('@/components/Alert').default
    },
    { 
      path: '*',
      redirect: '/'
    }
  ]
})
