<script setup lang="ts">
// Core
import { shallowRef, defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
// Components
import { ProgressSpinner } from '@/shared/ui/progress'
import { TheHeader } from '@/widgets/header'
// Composable
const route = useRoute()
// Reactive
const layoutComponent = shallowRef(null)
// Watch
watch(
	() => route,
	(newRoute) => {
		let layout = newRoute.meta?.layout

		if (layout) {
			layoutComponent.value = defineAsyncComponent({
				loader: () => import(`./layouts/${layout}.vue`),
				loadingComponent: ProgressSpinner,
				delay: 200
			})
		}
	},
	{
		immediate: true,
		deep: true
	}
)
</script>

<template>
	<div class="wrapper-layout-view bg-bg-3 min-h-screen">
		<the-header />

		<component :is="layoutComponent" />
	</div>
</template>
