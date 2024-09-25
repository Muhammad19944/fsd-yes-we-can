export interface MetaTypes extends Record<string | number | symbol, unknown> {
	layout: 'auth' | 'main' | 'empty'
}
