import Vue from 'vue'
import Router from 'vue-router'
import testStore from '../views/testStore'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'testStore',
      component:testStore
    }
  ]
})
