var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

var jsPath = 'src/js/*.js';
var sassPath = 'src/sass/*.scss';
var distPath = 'static/dist/';

// Lint
gulp.task('lint', function() {
    return gulp.src(jsPath)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
});
// JS
gulp.task('js', function() {
    return gulp.src(jsPath)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(distPath));
});
// SASS
gulp.task('sass', function() {
    gulp.src(sassPath)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(distPath));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(jsPath, ['lint', 'js']);
    gulp.watch(sassPath, ['sass']);
});

// Default
gulp.task('default', ['lint', 'js', 'sass', 'watch']);
