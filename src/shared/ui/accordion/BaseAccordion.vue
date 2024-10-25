<script setup lang="ts">
// Core
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
// Types
import type { IAccordion } from './types'
// Macros
const props = withDefaults(defineProps<IAccordion>(), {
	multiple: false,
	lazy: false,
	selectOnFocus: false
})
</script>

<template>
	<Accordion
		:value="value"
		:multiple="multiple"
		:lazy="lazy"
		:expand-icon="expandIcon"
		:collapse-icon="collapseIcon"
		:tabindex="tabindex"
		:select-on-focus="selectOnFocus"
	>
		<AccordionPanel :value="value">
			<AccordionHeader
				:pt="{
					toggleIcon: {
						class: '!w-3 !h-3 !text-text-400'
					}
				}"
			>
				<div class="text-lg">
					<slot name="header">
						{{ props.header }}
					</slot>
				</div>
			</AccordionHeader>

			<AccordionContent>
				<slot name="content" />
			</AccordionContent>
		</AccordionPanel>
	</Accordion>
</template>
