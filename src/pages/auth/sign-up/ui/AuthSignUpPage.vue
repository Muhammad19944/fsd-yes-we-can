<script setup lang="ts">
// Components
import { FormInput, FormPassword, FormCheckbox } from '@/shared/ui/forms'
import { MailIcon, SmileIcon, LockIcon } from '@/shared/ui/icons'
import { BaseButton } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/forms'
// Stores
import { useAuthStore } from '@/entities/auth/model'
// Types
import type { IForm } from '../model/sign-up.schema'
import { resolver } from '../model/sign-up.schema'
// Composable
const authStore = useAuthStore()
// Methods
const onFormSubmit = async ({ valid }: any) => {
	if (valid) {
		await authStore.actionSignUp()
	}
}
</script>

<template>
	<div class="auth-login-page">
		<h1 class="text-2xl font-bold text-white">Getting Started</h1>
		<p class="text-lg text-text-300 mt-1">Create an account to continue!</p>

		<base-form
			:initial-values="authStore.signUpModel"
			:resolver="resolver"
			@emit:submit="onFormSubmit"
		>
			<template #default="{ form }">
				<div class="space-y-6">
					<form-input
						v-model="authStore.signUpModel.options.data.name"
						:errors="(form as IForm).name?.errors"
						:transparent="false"
						name="name"
						placeholder="Your name"
					>
						<template #icon-left>
							<smile-icon />
						</template>
					</form-input>

					<form-input
						v-model="authStore.signUpModel.email"
						:errors="(form as IForm).email?.errors"
						name="email"
						:transparent="false"
						placeholder="Your email"
					>
						<template #icon-left>
							<mail-icon />
						</template>
					</form-input>

					<form-password
						v-model="authStore.signUpModel.password"
						:errors="(form as IForm).password?.errors"
						name="password"
						:transparent="false"
						placeholder="Create password"
					>
						<template #icon-left>
							<lock-icon />
						</template>
					</form-password>

					<form-checkbox input-id="term-condition" label="I agree to the Terms & Conditions" />

					<base-button type="submit" fluid label="Sign Up" size="large" rounded />
				</div>
			</template>
		</base-form>

		<div class="flex gap-1 mt-9">
			<span class="text-text-400">Already have an account?</span>
			<router-link to="/" class="text-blue-500">Sign In</router-link>
		</div>
	</div>
</template>
