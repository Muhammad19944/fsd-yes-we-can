export interface ISignUp extends ISignIn {
	options: {
		data: {
			name: string
		}
	}
}
export interface ISignIn {
	email: string
	password: string
}
