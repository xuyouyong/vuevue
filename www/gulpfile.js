var _gulp = require('gulp');
//插件
var _gulp_htmlmin=require('gulp-htmlmin')
var _gulpCssmin =require('gulp-minify-css')
var _gulpJsmin=require('gulp-uglify')
var _gulpImagemin = require('gulp-imagemin')

//创建任务

_gulp.task("cssmin", function() {
     _gulp.src('./css/wode.css')//css路径
     .pipe(_gulpCssmin())//用插件
     .pipe(_gulp.dest("./disk/"))
})