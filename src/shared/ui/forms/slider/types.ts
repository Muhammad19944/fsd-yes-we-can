// Types
import type { OrientationType } from '@/shared/types'

export interface ISlider {
	modelValue?: number | number[]
	min?: number
	max?: number
	orientation?: OrientationType
	step?: number
	range?: boolean
	disabled?: boolean
	tabindex?: number
}
