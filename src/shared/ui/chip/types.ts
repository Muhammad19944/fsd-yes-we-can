// Types
import type { SeverityType } from '@/shared/types'

export interface IChip {
	label: string
	icon?: null
	image?: null
	removable?: boolean
	removeIcon?: string
	color?: SeverityType
}
