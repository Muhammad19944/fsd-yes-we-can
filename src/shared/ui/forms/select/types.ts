// Types
import type { Component } from 'vue'
import type { VariantType } from '@/shared/types'

export interface ISelect {
	modelValue?: null | any
	options:
		| string[]
		| {
				[key: string]: any
		  }[]
	optionLabel?: string | Function
	optionValue?: string | Function
	optionDisabled?: string | Function
	scrollHeight?: string
	filter?: boolean
	filterPlaceholder?: string
	filterLocale?: string
	placeholder?: string
	invalid?: boolean
	disabled?: boolean
	variant?: VariantType
	showClear?: boolean
	fluid?: boolean
	transparent?: boolean
	icon?: Component
	iconClass?: string
}
