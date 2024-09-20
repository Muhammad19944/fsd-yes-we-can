import { createApp } from 'vue'
import { store, router } from './providers'
import App from './App.vue'

export const application = createApp(App).use(router).use(store)
