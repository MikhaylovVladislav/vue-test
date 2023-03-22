import { createApp } from 'vue'
import App from './App.vue'
import profileComponent from './components/ContentArea/profile-component/profile-component.vue'
import newsComponent from './components/ContentArea/news-component/news-component.vue'
import messengerComponent from './components/ContentArea/messenger-component/messenger-component.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/profile', component: profileComponent },
    { path: '/news', component: newsComponent },
    { path: '/messenger', component: messengerComponent }
  ]
})
createApp(App).use(router).mount('#app')
