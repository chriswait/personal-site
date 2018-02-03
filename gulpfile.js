var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();

var jsPath = 'src/js/*.js';
var sassPath = 'src/sass/*.scss';
var distPath = 'static/dist/';

// JS
gulp.task('js', function() {
  return gulp.src(jsPath)
  .pipe(plumber())
  .pipe(eslint())
  .pipe(concat('app.js'))
  .pipe(gulp.dest(distPath));
});
gulp.task('js-watch', ['js'], function(done) {
  browserSync.reload();
  done();
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
gulp.task('sass-watch', ['sass'], function(done) {
  browserSync.reload();
  done();
});

// Build
gulp.task('build', ['js', 'sass']);

// Serve
gulp.task('default', ['build'], function() {
  browserSync.init({
    proxy: 'localhost:8000'
  });
  gulp.watch(jsPath, ['js-watch']);
  gulp.watch(sassPath, ['sass-watch']);
});
