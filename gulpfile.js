var gulp = require('gulp');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');


var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var outputDir = 'public';

gulp.task('watch', function () {
    var watcher = gulp.watch('app/components/*.js');
    watcher.on('change',function(event){
    console.log('File: '+ event.path + ' was changed!');
    });
});


gulp.task('connect', function() {
  connect.server({
    root: [outputDir],
    livereload: true
  });
});


gulp.task('default', ['connect']);
//gulp.task('default'['connect'], function () {
//
//    //console.log('Gulp is running correctly!');
//});