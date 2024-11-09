<script setup lang="ts">
// Core
import { useToast } from 'primevue/usetoast'
// Components
import { FormInput, FormPassword, FormCheckbox } from '@/shared/ui/forms'
import { MailIcon, LockIcon } from '@/shared/ui/icons'
import { BaseButton } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/forms'
// Stores
import { useAuthStore } from '@/entities/auth/model'
// Types
import type { IForm } from '../model/sign-in.schema'
import { resolver } from '../model/sign-in.schema'
// Composable
const toast = useToast()
const authStore = useAuthStore()
// Methods
const submit = async ({ valid }: any) => {
	if (valid) {
		try {
			await authStore.actionSingIn()
		} catch (error) {
			toast.add({ severity: 'error', summary: 'Error Message', detail: error })
		}
	}
}
</script>

<template>
	<div class="auth-login-page">
		<h1 class="text-2xl font-bold text-white">Sign In</h1>
		<p class="text-lg text-text-300 mt-1">Welcome back, you’ve been missed!</p>

		<base-form :initial-values="authStore.signInModel" :resolver="resolver" @emit:submit="submit">
			<template #default="{ form }">
				<div class="space-y-6">
					<form-input
						v-model="authStore.signInModel.email"
						:errors="(form as IForm).email?.errors"
						:transparent="false"
						name="email"
						placeholder="Your email"
					>
						<template #icon-left>
							<mail-icon />
						</template>
					</form-input>

					<form-password
						v-model="authStore.signInModel.password"
						:errors="(form as IForm).password?.errors"
						:feedback="false"
						:transparent="false"
						name="password"
						placeholder="Create password"
					>
						<template #icon-left>
							<lock-icon />
						</template>
					</form-password>

					<form-checkbox input-id="term-condition" label="I agree to the Terms & Conditions" />

					<base-button type="submit" fluid label="Sign In" size="large" rounded />
				</div>
			</template>
		</base-form>

		<div class="flex gap-1 mt-9">
			<span class="text-text-400">Don't have an account yet?</span>
			<router-link to="/" class="text-blue-500">Sign Up</router-link>
		</div>
	</div>
</template>
