export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				sm: '15px',
				lg: '20px',
				xl: '20px',
				'2xl': '20px'
			},
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1260px',
				'2xl': '1496px'
			}
		},
		fontFamily: {
			regular: 'SF Pro Display Regular',
			medium: 'SF Pro Display Medium',
			semiBold: 'SF Pro Display SemiBold',
			bold: 'SF Pro Display Bold'
		},
		extend: {
			colors: {
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
				},
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
				overlay: {
					100: '#2F3746',
					200: '#C1C7D0',
					300: '#232A37',
					400: '#161C27'
				},
				text: {
					100: '#323B4B',
					200: '#EEF1F5',
					300: '#8A94A6',
					400: '#B0B7C3'
				},
				'text-1': '#323B4B',
				'text-2': '#EEF1F5',
				'text-3': '#8A94A6',
				'text-4': '#B0B7C3',
				'bg-1': '#C1C7D0',
				'bg-2': '#2F3746',
				'bg-3': '#232A37',
				'bg-4': '#161C27'
			},
			boxShadow: {
				'shadow-1': '0 23px 44px 0 rgb(3 8 17 / 14%)',
				'shadow-2': '0 33px 62px 0 rgba(3, 8, 17, 0.24)',
				'shadow-3': '0 44px 65px 0 rgba(3, 8, 17, 0.19)',
				'shadow-4': '0 50px 77px 0 rgba(3, 8, 17, 0.22)'
			}
		}
	},
	plugins: []
}
