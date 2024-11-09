import { createApp, h, provide } from 'vue'
import { store, router } from './providers'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient } from '@/shared/api/gql'
import App from './App.vue'
import './styles/index.css'
import { PrimeVue, CustomAuraPreset, ToastService } from '@/shared/plugins'

export const application = createApp({
	setup() {
		provide(ApolloClients, {
			default: apolloClient
		})
	},

	render: () => h(App)
})
	.use(router)
	.use(store)
	.use(ToastService)
	.use(PrimeVue, {
		theme: {
			preset: CustomAuraPreset
		}
	})
