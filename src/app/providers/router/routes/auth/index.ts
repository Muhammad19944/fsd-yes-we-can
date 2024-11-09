import type { RouteRecordRaw } from 'vue-router'
import { signUp } from './sign-up'
import { signIn } from './sign-in'

export const route: RouteRecordRaw[] = [signUp, signIn]
