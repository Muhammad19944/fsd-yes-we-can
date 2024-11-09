import { instance } from '@/shared/api'
import type { AuthResponse, SignUpWithPasswordCredentials } from '@/shared/api'

export const signIn = async (body: SignUpWithPasswordCredentials): Promise<AuthResponse> => {
	return await instance.auth.signInWithPassword(body)
}
