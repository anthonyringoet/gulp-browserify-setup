var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulp = require('gulp');


var hbsfy = require('hbsfy').configure({
  extensions: ['html', 'hbs']
});

gulp.task('browserify', function() {
  var bundleStream = browserify('./js/app.js')
    .transform(hbsfy)
    .bundle();

  bundleStream
    .pipe(source('./bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./js/build/'));
})
