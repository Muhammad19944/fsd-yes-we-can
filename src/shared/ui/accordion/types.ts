export interface IAccordion {
	value?: null | string | number | string[] | number[]
	multiple?: boolean
	lazy?: boolean
	expandIcon?: string
	collapseIcon?: string
	tabindex?: number
	selectOnFocus?: boolean
	header?: string
}
