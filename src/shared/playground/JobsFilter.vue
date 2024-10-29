<script setup lang="ts">
// Core
import { useQuery } from '@vue/apollo-composable'
// import { useQuery } from '@apollo/client'
import { gql } from 'graphql-tag'
import { onMounted } from 'vue'
// Components
import {
	TypeEmployment,
	TypeLevel,
	LanguagesOptions,
	SalaryRange,
	LocationOptions
} from '@/features/jobs/filters'
// Services
import { instance } from '@/shared/api/supabase'
// Reactive
// Methods
const data = useQuery(gql`
	query employment_typeCollection {
		employment_typeCollection {
			edges {
				node {
					nodeId
					title
					count
				}
			}
		}
	}
`)

console.log('3333', data)
async function getTodos() {
	const { data } = await instance.from('employment_type').select('*')

	console.log('data', data)
}

// const allTodosQueryDocument = gql`
// 	query employment_typeCollection {
//     edges {
//       node {
//         nodeId,
//         title,
//         count
//       }
//     }
//   }
// `

// const TodoList = () => {
//   const { data, fetchMore } = useQuery(allTodosQueryDocument)

// 	console.log('data 2222', data)
// }

onMounted(() => {
	getTodos()
	// TodoList()
})
</script>

<template>
	<div class="jobs-filter-view space-y-10 pt-[10px]">
		<type-employment />

		<type-level />

		<languages-options />

		<salary-range />

		<location-options />
	</div>
</template>
