const path = require('path')
const del = require('del')
const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

gulp.task('decompress', () => {
  return gulp.src('./source/icon.zip')
  .pipe(plugins.decompress({filter: file => path.extname(file.path) !== '.html'}))
  .pipe(gulp.dest('./source/'))
})

gulp.task('copy-font', () => {
  return gulp.src('./source/*/iconfont.{eot,svg,ttf,woff}')
  .pipe(plugins.flatten())
  .pipe(gulp.dest('./resource/font'))
})

gulp.task('write-css', () => {
  return gulp.src('./source/*/iconfont.css')
  .pipe(plugins.rename('_iconfont.scss'))
  .pipe(plugins.replace(/url\('(.*)'\)/g, 'url(\'#{font-dir}$1\')'))
  .pipe(gulp.dest('./resource/style/'))
})

gulp.task('build', ['decompress', 'copy-font', 'write-css'], () => {
  del.sync(['./source/*', '!./source/icon.zip'])
})
