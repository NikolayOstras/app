const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			borderRadius: {
				DEFAULT: '6px',
			},
			backdropBlur: {
				DEFAULT: '12px',
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			},
			transitionDuration: {
				DEFAULT: '333ms',
			},
		},
		screens: {
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
		},

		fontFamily: {
			sans: ['Montserrath', 'sans-serif'], // Шрифт по умолчанию
		},

		colors: {
			transparent: 'transparent',
			accent: {
				DEFAULT: '#B11824',
				hover: '#8F0F15',
				focus: '#7E0C11',
				active: '#5F0A0E',
			},
			white: '#fff',
			black: '#0D0D0D',

			neutral: {},
		},
	},
	plugins: [],
	variants: {},
}
