module.exports = {
	content: [
		'_layouts/**/*.{md,html,js}',
		'_posts/**/*.{md,html,js}',
		'_projects_apps/**/*.{md,html,js}',
		'_projects_featured/**/*.{md,html,js}',
		'_projects_open_source/**/*.{md,html,js}',
		'_projects_websites/**/*.{md,html,js}',
		'_redirects/**/*.{md,html,js}',
		'assets/js/**/*.{md,html,js}',
		'./*.md'
	],
	theme: {
		extend: {
			borderRadius: {
				xl: '0.75rem'
			},
			width: {
				'30%': '30%'
			},
			boxShadow: {
				blue: '0 4px 14px 0 rgba(0,118,255,0.39)',
				'blue-sm': '0 0px 10px 0 rgba(0,118,255,0.4)'
			},
			colors: {
				blue: {
					100: '#CCE2FD',
					200: '#99C6FA',
					300: '#66A9F8',
					400: '#338DF5',
					500: '#0070f3',
					600: '#0065DB',
					700: '#004EAA',
					800: '#002D61',
					900: '#001631'
				}
			}
		}
	},
	variants: {
		pointerEvents: ['responsive', 'group-hover'],
		opacity: ['responsive', 'hover', 'focus', 'group-hover']
	}
};
