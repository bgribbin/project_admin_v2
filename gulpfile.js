var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;

gulp.task('browserify', function() {
    browserify('./src/js/main.js')
      .transform('reactify')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('clean', function() {
  del(['dist']);
});

gulp.task('scss_that_shit', function () {
    gulp.src('./src/assets/scss/*.scss')
  .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }))
  .pipe(gulp.dest('dist/assets'));

});


gulp.task('default',['browserify', 'scss_that_shit', 'copy'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});