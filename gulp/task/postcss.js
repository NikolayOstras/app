import postcss from 'gulp-postcss'
import postcssCenter from 'postcss-center'
import postcssCustomMedia from 'postcss-custom-media'
import postcssShort from 'postcss-short'
const plugins = [
	postcssCustomMedia(),
	postcssShort(),
	postcssCenter(),
]
export const post = () => {
	return app.gulp
		.src(`${app.path.build.css}/style.css`)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'POSTCSS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(postcss(plugins))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
