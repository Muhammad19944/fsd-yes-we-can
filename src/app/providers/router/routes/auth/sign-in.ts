import type { RouteRecordRaw } from 'vue-router'
import type { MetaTypes } from '../../types'

export const signIn: RouteRecordRaw = {
	path: '/sign-in',
	name: 'AuthLoginPage',
	meta: {
		layout: 'AuthLayout'
	} as MetaTypes,
	component: () => import('@/pages/auth/sign-in')
}
