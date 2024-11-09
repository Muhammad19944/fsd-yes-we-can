// Types
import type { Component } from 'vue'
import type { SizeType, VariantType } from '@/shared/types'

export interface IFormInput {
	modelValue?: string
	size?: Exclude<SizeType, 'normal' | 'xlarge'>
	invalid?: boolean
	errors?: string[]
	variant?: VariantType
	fluid?: boolean
	placeholder?: string
	transparent?: boolean
	icon?: Component
	iconClass?: string
	trailing?: boolean
	name?: string
}
