<script setup lang="ts">
// Core
import { ref } from 'vue'
// Components
import { BaseAccordion } from '@/shared/ui/accordion'
import { BaseSlider } from '@/shared/ui/forms'
import { BaseChip } from '@/shared/ui/chip'
// Reactive
const range = ref([100, 400])
</script>

<template>
	<div class="type-employment-view">
		<base-accordion header="Salary Range">
			<template #content>
				<div class="space-y-4 pt-[10px]">
					<p class="flex-1 text-sm text-text-300">Full Time Jobs</p>

					<div>
						<div class="flex items-center justify-between gap-2 mb-6">
							<base-chip label="$15,000" color="contrast" />

							<base-chip label="$36,000" color="contrast" />
						</div>

						<base-slider v-model="range" range :max="1000" />
					</div>
				</div>
			</template>
		</base-accordion>
	</div>
</template>
