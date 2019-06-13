const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
	// Specify the paths to all of the template files in your project
	content: ['./_site/**/*.html'],

	// Include any special characters you're using in this regular expression
	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%]+/g) || []
});

mix.js('public/_js/main.js', 'public/js/app.js').postCss(
	'public/_css/style.css',
	'public/css',
	[
		require('tailwindcss'),
		require('autoprefixer'),
		...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
	]
);
