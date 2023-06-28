export const server = () => {
	app.plugins.browsersync.init({
		server: {
			baseDir: './build',
		},
		notify: false,
		port: 3000,
	})
}
