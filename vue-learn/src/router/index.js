import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from 'components/home'
import about from 'components/about'
import document from 'components/document'

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/document',
            component: document
        },
        {
            path: '*',
            component: home
        }
    ]
})

export default router;