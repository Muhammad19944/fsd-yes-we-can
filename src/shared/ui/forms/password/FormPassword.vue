<script setup lang="ts">
// Core
import { computed } from 'vue'
import Password from 'primevue/password'
// Components
import { ValidationError } from '@/shared/components/errors'
import { LockIcon } from '@/shared/ui/icons'
// Types
import type { IFormPassword } from './types'
// Utils
import {
	leastOneLowercase,
	leastOneUppercase,
	leastOneNumeric,
	minimum8Characters
} from '@/shared/libs/regex'
// Macros
const props = withDefaults(defineProps<IFormPassword>(), {
	feedback: true,
	toggleMask: true,
	variant: 'outlined',
	invalid: false,
	transparent: true
})
const emit = defineEmits(['update:modelValue'])
// Computed
const modelValue = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	}
})
const passwordClass = computed(() => {
	return [
		{
			'!bg-transparent !border-none': props.transparent,
			'!border-red-400': props.errors?.length
		},
		'flex-1 placeholder:!text-text-4 placeholder:translate-x-1 !text-sm !py-[14px] !pl-11'
	]
})
</script>

<template>
	<div class="forms-input">
		<div class="flex items-center relative">
			<div class="absolute left-4 z-[1]">
				<lock-icon />
			</div>

			<Password
				v-model="modelValue"
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
					pcInputText: {
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
							<div
								class="w-2 h-2 rounded-full bg-gray-500"
								:class="{ 'bg-green-500': modelValue && leastOneLowercase.test(modelValue) }"
							></div>
							<span
								class="flex-1 text-gray-300"
								:class="{ 'text-green-500': modelValue && leastOneLowercase.test(modelValue) }"
							>
								At least one lowercase
							</span>
						</li>

						<li class="flex items-center gap-2">
							<div
								class="w-2 h-2 rounded-full bg-gray-500"
								:class="{ 'bg-green-500': modelValue && leastOneUppercase.test(modelValue) }"
							></div>
							<span
								class="flex-1 text-gray-300"
								:class="{ 'text-green-500': modelValue && leastOneUppercase.test(modelValue) }"
							>
								At least one uppercase
							</span>
						</li>

						<li class="flex items-center gap-2">
							<div
								class="w-2 h-2 rounded-full bg-gray-500"
								:class="{ 'bg-green-500': modelValue && leastOneNumeric.test(modelValue) }"
							></div>
							<span
								class="flex-1 text-gray-300"
								:class="{ 'text-green-500': modelValue && leastOneNumeric.test(modelValue) }"
							>
								At least one numeric
							</span>
						</li>

						<li class="flex items-center gap-2">
							<div
								class="w-2 h-2 rounded-full bg-gray-500"
								:class="{ 'bg-green-500': modelValue && minimum8Characters.test(modelValue) }"
							></div>
							<span
								class="flex-1 text-gray-300"
								:class="{ 'text-green-500': modelValue && minimum8Characters.test(modelValue) }"
							>
								Minimum 8 characters
							</span>
						</li>
					</ul>
				</template>
			</Password>
		</div>

		<template v-if="errors?.length">
			<validation-error :errors="errors" />
		</template>
	</div>
</template>
