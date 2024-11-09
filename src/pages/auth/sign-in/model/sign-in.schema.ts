// Core
import * as yup from 'yup'
import { yupResolver } from '@primeuix/forms/resolvers/yup'

export const resolver = yupResolver(
	yup.object().shape({
		name: yup.string().required('Username is required via Yup.'),
		email: yup.string().email().required('Email is required via Yup.'),
		password: yup.string().required('Minimum 8 characters.')
	})
)

export interface IForm {
	register: (field: string, options: any) => any
	reset: () => void
	valid: boolean
	states: Record<string, IFormFieldValues>
	name: IFormFieldValues
	email: IFormFieldValues
	password: IFormFieldValues
}

export interface IFormFieldValues {
	value: string
	touched: boolean
	dirty: boolean
	pristine: boolean
	valid: boolean
	invalid: boolean
	error: null
	errors: Array<string>
}
