<script setup lang="ts">
// Components
import { BaseSelect } from '@/shared/ui/forms'
import { MarkerIcon } from '@/shared/ui/icons'
</script>

<template>
	<div class="jobs-location max-w-[285px] w-full">
		<base-select :options="[]" placeholder="Select Location" transparent :icon="MarkerIcon" />
	</div>
</template>
