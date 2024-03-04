import { createApp } from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router'
import store from './store'

store.subscribe((mutation, state) => {
    if (state) {
        localStorage.setItem('state', JSON.stringify(state));
    }
})

createApp(App).use(store).use(router).mount('#app')
