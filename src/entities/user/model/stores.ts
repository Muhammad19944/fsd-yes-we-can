import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchCurrentUser } from '@/shared/api'
import type { User } from '@/shared/api'

interface IUserStore {
	currentUser: Ref<User | null>
	isUserSignIn: Ref<boolean>
	actionCurrentUser: () => Promise<void>
}

export const useUserStore = defineStore('user-store', (): IUserStore => {
	const currentUser = ref<User | null>(null)
	const isUserSignIn = ref(false)

	const actionCurrentUser = async () => {
		const {
			data: { user },
			error
		} = await fetchCurrentUser()

		if (!error) {
			currentUser.value = user
			isUserSignIn.value = true
		}
	}

	return {
		currentUser,
		isUserSignIn,
		actionCurrentUser
	}
})
