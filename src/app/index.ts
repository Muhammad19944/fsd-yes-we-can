import { createApp, h, provide } from 'vue'
import { store, router } from './providers'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient } from '@/shared/api/gql'
import App from './App.vue'
import './styles/index.css'
import { PrimeVue, CustomAuraPreset } from '@/shared/plugins'

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
	.use(PrimeVue, {
		theme: {
			preset: CustomAuraPreset
		}
	})
