// Types
import type { SizeType, SeverityType } from '@/shared/types'

export interface IBadge {
	modelValue?: string | number
	size?: Exclude<SizeType, 'normal'>
	severity?: SeverityType
}
