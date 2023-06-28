// path
export const path = {
	build: {
		html: './build/',
		css: './build/css/',
		img: './build/img/',
		js: './build/js/',
	},
	src: {
		html: './src/*.pug',
		img: './src/img/**/*.{jpg,jpeg,png,gif}',
		scss: './src/scss/style.scss',
		components: './src/components/**/*.js',
		js: './src/js/app.js',
		jsFolder: './src/js/',
		svgicons: './src/img/icons/*.svg',
	},
	clean: './build',
}

// plugins

import browsersync from 'browser-sync'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'

export const plugins = {
	notify,
	plumber,
	rename,
	browsersync,
}
