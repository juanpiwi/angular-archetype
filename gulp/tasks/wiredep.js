// inject bower components
'use strict';

const gulp = require('gulp'),
    config = require('../config');

gulp.task('wiredep', function() {
    let wiredep = require('wiredep').stream;
    let exclude = config.path.bowerExclude;

    gulp.src('app/styles/*.less')
        .pipe(wiredep())
        .pipe(gulp.dest(config.path.styles));

    gulp.src('app/*.html')
        .pipe(wiredep({
            exclude: exclude
        }))
        .pipe(gulp.dest('app'));

    gulp.src('test/*.js')
        .pipe(wiredep({
            exclude: exclude,
            devDependencies: true
        }))
        .pipe(gulp.dest('test'));
});
