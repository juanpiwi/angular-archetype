'use strict';

const gulp = require('gulp'),
    config = require('../config');

gulp.task('clean', require('del').bind(null, config.path.clean));
