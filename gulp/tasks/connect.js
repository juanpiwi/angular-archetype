'use strict';

const gulp = require('gulp'),
	config = require('../config');

gulp.task('connect', ['styles'], function() {
	const serveStatic = require('serve-static');
	const serveIndex = require('serve-index');
	const app = require('connect')()
		.use(require('connect-livereload')({
			port: config.livereloadPort
		}))
		.use(serveStatic('.tmp'))
		.use(serveStatic('app'))
		// paths to bower_components should be relative to the current file
		// e.g. in app/index.html you should use ../bower_components
		.use(config.path.bower, serveStatic('bower_components'))
		.use(serveIndex(config.path.serverIndex));

	require('http').createServer(app)
		.listen(config.port)
		.on('listening', function() {
			console.log('Started connect web server on ' + config.url + ':' + config.port);
		});
});
