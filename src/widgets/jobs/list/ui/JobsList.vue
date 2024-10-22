<script setup lang="ts">
// Components
import { JobsItem } from '@/entities/jobs'
import { AddToFavourite } from '@/features/jobs/favorite'
</script>

<template>
	<div class="jobs-list bg-bg-4 rounded-[15px] space-y-3 p-6">
		<jobs-item>
			<template #favorite>
				<add-to-favourite />
			</template>
		</jobs-item>
	</div>
</template>
