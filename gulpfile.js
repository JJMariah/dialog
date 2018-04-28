/**
 * Created by Administrator on 2018/4/28.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('src'))
})

gulp.task('webserver', function () {
    connect.server({
        host: '192.168.1.109',// 本地的ip
        livereload: true,
        port: 8080
    })
})

gulp.task('default', ['less', 'webserver'])
