import gulp from 'gulp'
import { path, plugins } from './gulp/settings/settings.js'

import { build } from './gulp/task/build.js'
import { css } from './gulp/task/css.js'
import { html } from './gulp/task/html.js'
import { img } from './gulp/task/img.js'
import { post } from './gulp/task/postcss.js'
import { scss } from './gulp/task/scss.js'
import { server } from './gulp/task/server.js'
global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

const watcher = () => {
	gulp.watch('./src/**/**/*.html', html)
	gulp.watch('./src/**/**/*.{scss,sass}', styles)
	gulp.watch('./src/**/**/*.js', build)
}
const styles = gulp.series(scss, post)
const buildApp = gulp.series(html, styles, post, build, css, img)
const dev = gulp.series(
	html,
	scss,
	post,
	build,
	gulp.parallel(watcher, server)
)

gulp.task('image', img)
gulp.task('build', buildApp)
gulp.task('dev', dev)
