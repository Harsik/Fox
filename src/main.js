import 'vuetify/src/stylus/app.styl';
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import router from './router'
//import express from 'express'

Vue.use(Vuetify, {
  iconfont: 'mdi'
});
//express.run();
new Vue({
  render: h => h(App)
  ,router
}).$mount('#app');
