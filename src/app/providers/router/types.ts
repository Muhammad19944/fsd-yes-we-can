export interface MetaTypes extends Record<string | number | symbol, unknown> {
	layout: 'AuthLayout' | 'EmptyLayout' | 'MainLayout'
}
