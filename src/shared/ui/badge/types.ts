// Types
import type { SizeType, VariantType } from '@/shared/types'

export interface IBadge {
	modelValue?: string | number
	size?: Exclude<SizeType, 'normal'>
	severity?: VariantType
}
