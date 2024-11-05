<script setup lang="ts">
// Core
import { computed } from 'vue'
import Password from 'primevue/password'
// Types
import type { IFormPassword } from './types'
// Components
import { LockIcon } from '@/shared/ui/icons'
// Macros
const props = withDefaults(defineProps<IFormPassword>(), {
	feedback: true,
	toggleMask: true,
	variant: 'outlined',
	invalid: false,
	transparent: true
})
// Computed
const passwordClass = computed(() => {
	return [
		{
			'!bg-transparent !border-none': props.transparent
		},
		'flex-1 placeholder:!text-text-4 placeholder:translate-x-1 !text-sm !py-[14px] !pl-11'
	]
})
</script>

<template>
	<div class="forms-input flex items-center relative">
		<div class="absolute left-4 z-[1]">
			<lock-icon />
		</div>

		<Password
			:modelValue="modelValue"
			:defaultValue="defaultValue"
			:name="name"
			:promptLabel="promptLabel"
			:mediumRegex="mediumRegex"
			:strongRegex="strongRegex"
			:weakLabel="weakLabel"
			:mediumLabel="mediumLabel"
			:strongLabel="strongLabel"
			:feedback="feedback"
			:appendTo="appendTo"
			:toggleMask="toggleMask"
			:maskIcon="maskIcon"
			:unmaskIcon="unmaskIcon"
			:size="size"
			:invalid="invalid"
			:disabled="disabled"
			:variant="variant"
			:placeholder="placeholder"
			:required="required"
			:fluid="fluid"
			:autofocus="autofocus"
			:pt="{
				root: {
					class: ['w-full']
				},
				pcInput: {
					root: {
						class: [passwordClass]
					}
				}
			}"
		>
			<template #header>
				<div class="mb-2">Pick a password</div>
			</template>

			<template #footer>
				<ul class="space-y-1 mt-1">
					<li class="flex items-center gap-2">
						<div class="w-2 h-2 rounded-full bg-gray-500"></div>
						<span class="flex-1 text-gray-300">At least one lowercase</span>
					</li>

					<li class="flex items-center gap-2">
						<div class="w-2 h-2 rounded-full bg-gray-500"></div>
						<span class="flex-1 text-gray-300">At least one uppercase</span>
					</li>

					<li class="flex items-center gap-2">
						<div class="w-2 h-2 rounded-full bg-gray-500"></div>
						<span class="flex-1 text-gray-300">At least one numeric</span>
					</li>

					<li class="flex items-center gap-2">
						<div class="w-2 h-2 rounded-full bg-gray-500"></div>
						<span class="flex-1 text-gray-300">Minimum 8 characters</span>
					</li>
				</ul>
			</template>
		</Password>
	</div>
</template>
