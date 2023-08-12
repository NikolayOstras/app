import sass from 'gulp-dart-sass';
import cached from 'gulp-cached';

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss)
		.pipe(cached('scss'))
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(sass())
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
};