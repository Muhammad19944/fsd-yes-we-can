<script setup lang="ts">
// Components
import { BaseAccordion } from '@/shared/ui/accordion'
import { FormCheckbox } from '@/shared/ui/forms'
import { BaseChip } from '@/shared/ui/chip'
</script>

<template>
	<div class="type-employment-view">
		<base-accordion header="Languages">
			<template #content>
				<div class="space-y-4 pt-[10px]">
					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Javascript</p>
						<base-chip label="223" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Node.js</p>
						<base-chip label="145" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Python</p>
						<base-chip label="28" />
					</div>
				</div>
			</template>
		</base-accordion>
	</div>
</template>
