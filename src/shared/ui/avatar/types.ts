// Types
import type { SizeType, ShapeType } from '@/shared/types'

export interface IAvatar {
	label?: string
	icon?: string
	image?: string
	size?: Exclude<SizeType, null | 'small'>
	shape?: ShapeType
	rootClass?: string
}
