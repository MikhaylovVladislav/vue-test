import { createApp } from 'vue'
import App from './App.vue'
import profileComponent from './components/ContentArea/profile-component/profile-component.vue'
import newsComponent from './components/ContentArea/news-component/news-component.vue'
import messengerComponent from './components/ContentArea/messenger-component/messenger-component.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import usersComponent from '@/components/ContentArea/users-component/users-component.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/profile', component: profileComponent },
    { path: '/news', component: newsComponent },
    { path: '/messenger', component: messengerComponent },
    { path: '/users', component: usersComponent }
  ]
})

createApp(App).use(store).use(router).mount('#app')
