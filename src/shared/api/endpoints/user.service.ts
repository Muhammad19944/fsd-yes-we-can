import { instance } from '@/shared/api'

export const fetchCurrentUser = async () => {
	return await instance.auth.getUser()
}
