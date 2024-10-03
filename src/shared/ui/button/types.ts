// Types
import type { Component } from 'vue'
import type { IconPositon, SeverityType, SizeType } from '@/shared/types'

export interface IButton {
	label?: string
	icon?: Component
	iconPos?: IconPositon
	iconClass?: string
	loading?: boolean
	severity?: SeverityType
	rounded?: boolean
	text?: boolean
	outlined?: boolean
	size?: Exclude<SizeType, 'normal' | 'xlarge'>
	plain?: boolean
	fluid?: boolean
}
