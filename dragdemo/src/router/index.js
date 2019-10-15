import Vue from 'vue'
import Router from 'vue-router'
import drag from '../views/drag'
import dragList from '../views/dragList'
import dragCopy from '../views/dragCopy'
import Vddl from 'vddl'

Vue.use(Router)
Vue.use(Vddl)

export default new Router({
  routes:[
    {
      path:'/',
      name:'dragCopy',
      component:dragCopy
    }
  ]
})
