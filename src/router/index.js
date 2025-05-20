import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import DirectivesDemo from '@/pages/DirectivesDemo'
import BindingDemo from '@/pages/BindingDemo'
import ComponentsDemo from '@/pages/ComponentsDemo'
import RouterDemo from '@/pages/RouterDemo'
import VuexDemo from '@/pages/VuexDemo'
import TransitionDemo from '@/pages/TransitionDemo'
import DirectiveDemo from '@/pages/DirectiveDemo'

// Router Sub Components
import RouterSubA from '@/components/RouterSubA'
import RouterSubB from '@/components/RouterSubB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/directives',
      name: 'directives',
      component: DirectivesDemo
    },
    {
      path: '/binding',
      name: 'binding',
      component: BindingDemo
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsDemo
    },
    {
      path: '/router',
      name: 'router',
      component: RouterDemo,
      children: [
        {
          path: 'a',
          name: 'router-a',
          component: RouterSubA
        },
        {
          path: 'b',
          name: 'router-b',
          component: RouterSubB
        }
      ]
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: VuexDemo
    },
    {
      path: '/transition',
      name: 'transition',
      component: TransitionDemo
    },
    {
      path: '/directive',
      name: 'directive',
      component: DirectiveDemo
    }
  ]
})
