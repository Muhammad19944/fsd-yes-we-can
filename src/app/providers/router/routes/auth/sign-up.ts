import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../../types'

export const signUp: RouteRecordRaw = {
	path: '/sign-up',
	name: 'AuthSignUpPage',
	meta: {
		layout: 'AuthLayout'
	} as MetaTypes,
	component: () => import('@/pages/auth/sign-up')
}
