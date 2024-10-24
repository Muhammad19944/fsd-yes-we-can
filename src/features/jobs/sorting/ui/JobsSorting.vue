<script setup lang="ts">
// Core
import { ref } from 'vue'
// Components
import { BaseSelect } from '@/shared/ui/forms'
// Reactive
const selected = ref(null)
</script>

<template>
	<div class="jobs-sorting-view flex justify-between gap-4 mb-6">
		<p class="text-text-4">Showing: <span class="text-text-2">520 filtered jobs</span></p>

		<base-select
			v-model="selected"
			:options="[
				{ text: 'Jobs asc', value: 1 },
				{ text: 'Jobs desc', value: 2 }
			]"
			option-label="text"
			placeholder="Sort by:"
			show-clear
		/>
	</div>
</template>
