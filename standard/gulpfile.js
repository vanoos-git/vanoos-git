var gulp = require('gulp');
var watch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var jsonminify = require('gulp-jsonminify');
var runSequence = require('gulp-run-sequence');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('imgmin', function() {
  gulp.src("iamges/*", {
    read: false
  }).pipe(clean());
  return gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('main/images'))
});

gulp.task('minify', function() {
  return gulp.src(['JSON/*.json'])
    .pipe(jsonminify())
    .pipe(gulp.dest('main/JSON'));
});

gulp.task('jscon', function() {
    return gulp.src('js/mycode/*.js')
       .pipe(uglify())
       .pipe(concat('code.js'))
       .pipe(gulp.dest('main/js'));
});


gulp.task('mincss', function() {
  var fb = gulp.src('style.css');
  fb.pipe(minifyCss());
  fb.pipe(gulp.dest('main'));
  return fb;
});

gulp.task('js', function(cb) {
  pump([
      gulp.src('js/*.js'),
      uglify(),
      gulp.dest('main/js/')
    ],
    cb
  );
});

gulp.task('watch', function() {
  gulp.watch('images/*', ['imgmin']);
  gulp.watch('JSON/*.json', ['imgmin']);
    gulp.watch('style.css', ['mincss']);
    gulp.watch('js/*.js', ['jscon']);
});

gulp.task('default', ['watch']);
