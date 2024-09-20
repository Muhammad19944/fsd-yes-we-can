import { createApp } from 'vue'
import { store, router } from './providers'
import App from './App.vue'
import './styles/index.css'

export const application = createApp(App).use(router).use(store)
