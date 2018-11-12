const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify');

gulp.task('js', function() {
  return gulp
    .src(['./src/**/*.js'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./lib'));
});

gulp.task('css', function() {
  const plugins = [
    require('postcss-import')({
      root: __dirname,
      path: [path.join(__dirname, './src/components')],
    }),
    require('postcss-mixins')(),
    require('postcss-each')(),
    require('postcss-reporter')({ clearMessages: true }),
  ];

  return gulp
    .src(['./src/**/*.css'])
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['js', 'css']);
