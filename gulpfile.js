'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

//Sass & Autoprefixer Task
gulp.task('sass', function () {
    gulp.src('sass/**/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css/'));
});
// Watch Task
gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});

// Compress Task
gulp.task('compress', function() {
    gulp.src('images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('images/'));
});
// Watch Task
gulp.task('imagemin:watch', function() {
    gulp.watch('images/*', ['compress']);
});

