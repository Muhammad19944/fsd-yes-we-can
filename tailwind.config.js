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
				'primary-1': '#5B7FFF',
				'primary-2': '#38CB89',
				'primary-3': '#FFAB00',
				'primary-4': '#FF5630',
				'secondary-1': '#E1ECFF',
				'secondary-2': '#E5F6EF',
				'secondary-3': '#FDF4E0',
				'secondary-4': '#FFE6E0',
				'transparent-1': '#F4F8FF',
				'transparent-2': '#F5FCF9',
				'transparent-3': '#FFFBF1',
				'transparent-4': '#FFF6F4',
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
