'use strict';

const gulp = require('gulp'),
    config = require('../config');

gulp.task('extras', function() {
    return gulp.src(config.path.extra, {
        dot: true
    }).pipe(gulp.dest('dist'));
});
