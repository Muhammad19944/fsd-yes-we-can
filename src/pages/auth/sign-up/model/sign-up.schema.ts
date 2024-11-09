// Core
import * as yup from 'yup'
import { yupResolver } from '@primeuix/forms/resolvers/yup'
// Utils
import {
	leastOneLowercase,
	leastOneUppercase,
	leastOneNumeric,
	minimum8Characters
} from '@/shared/libs/regex'

export const resolver = yupResolver(
	yup.object().shape({
		name: yup.string().required('Username is required via Yup.'),
		email: yup.string().email().required('Email is required via Yup.'),
		password: yup
			.string()
			.matches(leastOneLowercase, 'At least one lowercase')
			.matches(leastOneUppercase, 'At least one uppercase')
			.matches(leastOneNumeric, 'At least one numeric')
			.matches(minimum8Characters, 'Minimum 8 characters')
			.required('Password is required via Yup.')
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
