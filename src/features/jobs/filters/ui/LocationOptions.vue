<script setup lang="ts">
// Components
import { BaseAccordion } from '@/shared/ui/accordion'
import { FormCheckbox } from '@/shared/ui/forms'
import { BaseChip } from '@/shared/ui/chip'
</script>

<template>
	<div class="type-employment-view">
		<base-accordion header="Location">
			<template #content>
				<div class="space-y-4 pt-[10px]">
					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">United States</p>
						<base-chip label="2353" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Russia</p>
						<base-chip label="382" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">Ukraine</p>
						<base-chip label="472" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">United Kingdom</p>
						<base-chip label="841" />
					</div>

					<div class="flex items-center gap-3">
						<form-checkbox />
						<p class="flex-1 text-sm text-text-300">France</p>
						<base-chip label="184" />
					</div>
				</div>
			</template>
		</base-accordion>
	</div>
</template>
