import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	defaultDataIdFromObject
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { instance } from '../supabase'

const cache = new InMemoryCache({
	dataIdFromObject(responseObject) {
		if ('nodeId' in responseObject) {
			return `${responseObject.nodeId}`
		}

		return defaultDataIdFromObject(responseObject)
	}
})

const httpLink = createHttpLink({
	uri: 'https://tzjmbndgpgpkstqvztfq.supabase.co/graphql/v1',
	headers: {
		apiKey:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6am1ibmRncGdwa3N0cXZ6dGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTYwOTcsImV4cCI6MjA0NTY5MjA5N30.LkEAuJPTY6Mjzam3svo7w_z-O5dfhspqFEZgbBvD7JI'
	}
})

const authLink = setContext(async (_, { headers }) => {
	const token = (await instance.auth.getSession()).data.session?.access_token

	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : ''
		}
	}
})

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache
})

export default apolloClient
