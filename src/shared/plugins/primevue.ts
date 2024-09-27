import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export { default as PrimeVue } from 'primevue/config'
export const CustomAuraPreset = definePreset(Aura, {
	primitive: {
		green: {
			50: '#edfcf4',
			100: '#d3f8e2',
			200: '#aaf0ca',
			300: '#73e2ad',
			400: '#38cb89',
			500: '#18b171',
			600: '#0c8f5c',
			700: '#09734c',
			800: '#0a5b3d',
			900: '#094b33',
			950: '#042a1e'
		},
		red: {
			50: '#fff2ed',
			100: '#ffe2d4',
			200: '#ffc0a8',
			300: '#ff9471',
			400: '#ff5630',
			500: '#fe3311',
			600: '#ef1907',
			700: '#c60c08',
			800: '#9d0f11',
			900: '#7e1011',
			950: '#44060a'
		},
		orange: {
			50: '#fff7ed',
			100: '#ffedd5',
			200: '#fed7aa',
			300: '#fdba74',
			400: '#fb923c',
			500: '#f97316',
			600: '#ea580c',
			700: '#c2410c',
			800: '#9a3412',
			900: '#7c2d12',
			950: '#431407'
		},
		blue: {
			50: '#e3f2ff',
			100: '#b3daff',
			200: '#80c1ff',
			300: '#4da7ff',
			400: '#377dff',
			500: '#0056e0',
			600: '#0046c2',
			700: '#0035a3',
			800: '#002584',
			900: '#001466',
			950: '#000947'
		}
	},
	semantic: {
		primary: {
			50: '{blue.50}',
			100: '{blue.100}',
			200: '{blue.200}',
			300: '{blue.300}',
			400: '{blue.400}',
			500: '{blue.500}',
			600: '{blue.600}',
			700: '{blue.700}',
			800: '{blue.800}',
			900: '{blue.900}',
			950: '{blue.950}'
		}
	}
})
