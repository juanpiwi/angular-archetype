'use strict';

let config = {
    path: {
        serverIndex: 'app',
        dist: 'dist/**/*',
        clean: ['.tmp', 'dist', 'target'],
        bower: '/bower_components',
        bowerFonts: 'bower_components/bootstrap/fonts/*',
        customFonts: 'app/fonts/**/*',
        html: 'app/**/*.html',
        images: 'app/images/**/*',
        less: 'app/styles/main.less',
        styles: 'app/styles',
        extra: [
            'app/*.*',
            '!app/*.html',
            'node_modules/apache-server-configs/dist/.htaccess'
        ],
        watch: [
            'app/**/*.html',
            '.tmp/styles/**/*.css',
            'app/scripts/**/*.js',
            'app/images/**/*'
        ],
        bowerExclude: [
            //'bootstrap',
            //'jquery',
            'es5-shim',
            'json3',
            'angular-scenario'
        ],
        jshint: ['app/scripts/**/*.js', 'gulp/**/*.js', '!app/scripts/libs/**/*.js']
    },
    url: 'http://0.0.0.0',
    livereloadPort: 35729,
    port: 9999
};

module.exports = config;
