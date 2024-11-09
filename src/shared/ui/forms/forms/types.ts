// Types
import type { FormResolverOptions } from '@primevue/forms'

export interface IBaseForm {
	initialValues: object
	resolver: (
		e: FormResolverOptions
	) => Record<string, any> | Promise<Record<string, any>> | undefined
}
