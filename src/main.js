// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由和需要的路由组件
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
//http服务
import VueResource from 'vue-resource'
//axios
import axios from 'axios'
//引入vuex的数据
import {store} from './store/store'

Vue.prototype.$axios=axios


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);


const router=new VueRouter({
  routes:[
    {path:"/",component:HelloWorld},
    {path:"/test",component:Test}
  ],
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
