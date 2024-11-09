// Core
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
// Types
import type { ISignUp, ISignIn } from './types'
// API
import { signUp, signIn } from '@/shared/api'

interface IAuthStore {
	signUpModel: Ref<ISignUp>
	actionSignUp: () => Promise<void>
	signInModel: Ref<ISignIn>
	actionSingIn: () => Promise<void>
}

export const useAuthStore = defineStore('auth', (): IAuthStore => {
	// Reactive
	const signUpModel = ref<ISignUp>({
		email: '',
		password: '',
		options: {
			data: {
				name: ''
			}
		}
	})
	const signInModel = ref<ISignIn>({
		email: '',
		password: ''
	})

	const router = useRouter()

	// Methods
	const actionSignUp = async () => {
		const response = await signUp(signUpModel.value)

		console.log('response', response)
	}

	const actionSingIn = async () => {
		const { error } = await signIn(signInModel.value)

		if (error) {
			throw new Error(error?.message)
		} else {
			await router.push({ name: 'JobsPage' })
		}
	}

	return {
		signUpModel,
		signInModel,
		actionSignUp,
		actionSingIn
	}
})
