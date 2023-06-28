let colors = {
	transparent: 'transparent',
	white: '#ffffff',
	grey: '#dddddd',
	black: '#000000',
}
module.exports = {
	content: ['./src/**/*.{html,js,pug}'],
	theme: {
		colors: colors,
		backgroundColors: colors,
		width: theme => ({
			auto: 'auto',
			...theme('spacing'),
			'1_2': '50%',
			'1_3': '33.333333%',
			'2_3': '66.666667%',
			'1_4': '25%',
			'2_4': '50%',
			'3_4': '75%',
			'1_5': '20%',
			'2_5': '40%',
			'3_5': '60%',
			'4_5': '80%',
			'1_6': '16.666667%',
			'2_6': '33.333333%',
			'3_6': '50%',
			'4_6': '66.666667%',
			'5_6': '83.333333%',
			'1_12': '8.333333%',
			'2_12': '16.666667%',
			'3_12': '25%',
			'4_12': '33.333333%',
			'5_12': '41.666667%',
			'6_12': '50%',
			'7_12': '58.333333%',
			'8_12': '66.666667%',
			'9_12': '75%',
			'10_12': '83.333333%',
			'11_12': '91.666667%',
			full: '100%',
			screen: '100vw',
		}),
		screens: {
			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }
		},
	},
	fonts: {
		'sans-serif': 'Arial',
		serif: 'Georgia',
	},
	textSizes: {
		'4xs': '.375rem', // 6px
		'3xs': '.5rem', // 8px
		'2xs': '.625rem', // 10px
		xs: '.75rem', // 12px
		sm: '.875rem', // 14px
		base: '1rem', // 16px
		lg: '1.125rem', // 18px
		xl: '1.25rem', // 20px
		'2xl': '1.5rem', // 24px
		'3xl': '1.875rem', // 30px
		'4xl': '2.25rem', // 36px
		'5xl': '3rem', // 48px
		'6xl': '4rem', // 64px
	},
	leading: {
		none: 1,
		tight: 1.25,
		snug: 1.375,
		normal: 1.5,
		relaxed: 1.625,
		loose: 2,
	},
	borderWidths: {
		default: '1px',
		0: '0',
		2: '2px',
		4: '4px',
		8: '8px',
	},
	borderRadius: {
		none: '0',
		sm: '2px',
		default: '3px',
		lg: '5px',
		full: '9999px',
	},
	shadows: {
		default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
		none: 'none',
	},
	zIndex: {
		auto: 'auto',
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
	},
	opacity: {
		0: '0',
		25: '.25',
		50: '.5',
		75: '.75',
		100: '1',
	},
	separator: '__',

	plugins: [],
}
