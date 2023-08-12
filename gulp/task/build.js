import gulpEsbuild from 'gulp-esbuild';
import cached from 'gulp-cached';

export const build = () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(cached('scripts')) 
		.pipe(
			gulpEsbuild({
				outfile: 'app.js',
				bundle: true,
				// minify: true,
				incremental: true,
				keepNames: true 
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
};