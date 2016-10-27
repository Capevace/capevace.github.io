/* eslint-disable import/no-extraneous-dependencies, no-console */
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imageResize = require('gulp-image-resize');

gulp.task('work', ['work-thumbnails', 'work-slides']);

gulp.task('work-thumbnails', () => {
  return gulp.src(['./app/data/**/thumbnail.png', './app/data/**/thumbnail.jpg', './app/data/**/thumbnail.jpeg'])
    .pipe(imageResize({
      width: 508,
      height: 284,
      upscale: true,
      crop: true,
      gravity: 'North',
      background: '#888'
    }))
    .pipe(gulp.dest('./public/static/img/work/'));
});

gulp.task('work-slides', () => {
  return gulp.src(['./app/data/**/slide-*.png', './app/data/**/slide-*.jpg', './app/data/**/slide-*.jpeg'])
    .pipe(imageResize({
      height: 427,
      upscale: true,
      crop: false,
      gravity: 'Center',
    }))
    .pipe(gulp.dest('./public/static/img/work/'));
});

gulp.task('js', () => {
  const b = browserify({
    entries: './public/_js/main.js',
    debug: true,
    extensions: ['.es6']
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))

    // Add transformation tasks to the pipeline here.
    .pipe(uglify())
      .on('error', gutil.log)

    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('scss', () =>
  gulp.src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 2%'],
      cascade: false,
    }))
    .pipe(cleanCSS({ debug: true }, (details) => {
      console.log(`Original Size: ${details.stats.originalSize / 1000}kb`);
      console.log(`Minified Size: ${details.stats.minifiedSize / 1000}kb`);
    }))
    .pipe(gulp.dest('./public/static/css'))
);

gulp.task('js:watch', ['js'], () => {
  gulp.watch('./app/js/**/*.js', ['js']);
});

gulp.task('scss:watch', ['scss'], () => {
  gulp.watch('./app/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['js', 'scss']);
gulp.task('watch', ['js:watch', 'scss:watch']);
