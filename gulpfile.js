'use strict'

var gulp = require('gulp')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var bourbon = require('node-bourbon')
var neat = require('node-neat')
var browserSync = require('browser-sync').create()


gulp.task('styles', function () {
  gulp.src('./scss/style.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: neat.includePaths
    }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./public'))
    .on('error', function() { console.log(arguments) })
})


gulp.task('serve', ['styles'], function () {
  browserSync.init({
    proxy: 'localhost:5000/',
  })

  browserSync.watch(['./public/**', './views/**'], browserSync.reload)
  gulp.watch('./scss/**', ['styles'])
})

gulp.task('default', ['serve'])
