<script setup lang="ts">
// Components
import { FormInput, FormPassword, FormCheckbox } from '@/shared/ui/forms'
import { MailIcon, SmileIcon, LockIcon } from '@/shared/ui/icons'
import { BaseButton } from '@/shared/ui/button'
</script>

<template>
	<div class="auth-login-page">
		<h1 class="text-2xl font-bold text-white">Getting Started</h1>
		<p class="text-lg text-text-300 mt-1">Create an account to continue!</p>

		<div class="space-y-6">
			<form-input :transparent="false" placeholder="Your email">
				<template #icon-left>
					<mail-icon />
				</template>
			</form-input>

			<form-input :transparent="false" placeholder="Your name">
				<template #icon-left>
					<smile-icon />
				</template>
			</form-input>

			<form-password :transparent="false" placeholder="Create password">
				<template #icon-left>
					<lock-icon />
				</template>
			</form-password>

			<form-checkbox input-id="term-condition" label="I agree to the Terms & Conditions" />

			<base-button fluid label="Sign Up" size="large" rounded />
		</div>

		<div class="flex gap-1 mt-9">
			<span class="text-text-400">Already have an account?</span>
			<router-link to="/" class="text-blue-500">Sign In</router-link>
		</div>
	</div>
</template>
