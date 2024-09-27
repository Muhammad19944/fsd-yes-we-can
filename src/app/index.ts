import { createApp } from 'vue'
import { store, router } from './providers'
import App from './App.vue'
import './styles/index.css'
import { PrimeVue, CustomAuraPreset } from '@/shared/plugins'

export const application = createApp(App)
	.use(router)
	.use(store)
	.use(PrimeVue, {
		theme: {
			preset: CustomAuraPreset
		}
	})
