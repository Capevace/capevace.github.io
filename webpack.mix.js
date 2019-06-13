const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('public/_js/main.js', 'public/js/app.js').postCss('public/_css/style.css', 'public/css', [
	require('tailwindcss'),
	require('autoprefixer')
]);