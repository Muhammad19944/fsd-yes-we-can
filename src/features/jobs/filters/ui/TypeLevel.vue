<script setup lang="ts">
// Components
import { BaseAccordion } from '@/shared/ui/accordion'
import { FormCheckbox } from '@/shared/ui/forms'
import { BaseChip } from '@/shared/ui/chip'
</script>

<template>
	<div class="type-employment-view">
		<base-accordion header="Seniority Level">
			<template #content>
				<div class="space-y-4 pt-[10px]">
					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Junior Developer</p>
						<base-chip label="23" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Middle Developer</p>
						<base-chip label="45" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Senior Developer</p>
						<base-chip label="78" />
					</div>
				</div>
			</template>
		</base-accordion>
	</div>
</template>
