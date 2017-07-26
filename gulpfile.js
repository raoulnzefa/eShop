const path = require('path')
const del = require('del')
const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

const repo = './repo'

gulp.task('decompress', () => {
  return gulp.src(`${repo}/icon.zip`)
    .pipe(plugins.decompress({filter: file => path.extname(file.path) !== '.html'}))
    .pipe(gulp.dest(`${repo}`))
})

gulp.task('copy-font', ['decompress'], () => {
  return gulp.src(`${repo}/*/iconfont.{eot,svg,ttf,woff}`)
    .pipe(plugins.flatten())
    .pipe(gulp.dest(`${repo}/font`))
})

gulp.task('write-css', ['decompress'], () => {
  return gulp.src(`${repo}/*/iconfont.css`)
    .pipe(plugins.rename('_iconfont.scss'))
    .pipe(plugins.replace(/url\('(.*)'\)/g, 'url(\'#{$font-dir}$1\')'))
    .pipe(gulp.dest(`${repo}/style/`))
})

gulp.task('build', ['copy-font', 'write-css'], () => {
  del.sync([`${repo}/*`, `!${repo}/icon.zip`])
})
