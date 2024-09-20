import type { RouteRecordRaw } from 'vue-router'
import { MainLayout, AuthLayout } from '@/app/layouts'

export const routes: readonly RouteRecordRaw[] = [
	// MainLayout
	{
		path: '/',
		name: 'main-layout',
		component: MainLayout
	},
	// AuthLayout
	{
		path: '/auth',
		name: 'auth-layout',
		component: AuthLayout
	}
] as const
