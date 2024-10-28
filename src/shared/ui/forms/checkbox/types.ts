// Types
import type { VariantType } from '@/shared/types'

export interface ICheckbox {
	value?: any
	modelValue?: any
	name?: string
	binary?: boolean
	indeterminate?: boolean
	invalid?: boolean
	disabled?: boolean
	variant?: VariantType
	readonly?: boolean
	tabindex?: number
	required?: boolean
}
