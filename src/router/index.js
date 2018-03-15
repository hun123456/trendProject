import Vue from 'vue'
import Router from 'vue-router'
import root from '@/base/rootLayer'
import index from '@/base/index'
import HelloWorld from '@/components/HelloWorld'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: root,
      children:[
        //首页
        {
          path:'/',
          name:'index',
          component:index
        },
        {
          path:'/hello',
          name:'HelloWorld',
          component:HelloWorld
        },

      ]
    }
  ]
})