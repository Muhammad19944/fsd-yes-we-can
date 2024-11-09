// Types
import type { SizeType, VariantType } from '@/shared/types'

export interface IFormPassword {
	modelValue?: string
	defaultValue?: string
	name?: string
	promptLabel?: string
	mediumRegex?: string | RegExp
	strongRegex?: string | RegExp
	weakLabel?: string
	mediumLabel?: string
	strongLabel?: string
	feedback?: boolean
	appendTo?: HTMLElement | 'body' | 'self'
	toggleMask?: boolean
	maskIcon?: string
	unmaskIcon?: string
	size?: Exclude<SizeType, 'normal' | 'xlarge'>
	invalid?: boolean
	errors?: string[]
	disabled?: boolean
	variant?: VariantType
	placeholder?: string
	required?: boolean
	fluid?: boolean
	autofocus?: boolean
	transparent?: boolean
}
