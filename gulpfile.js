const gulp = require('gulp')
const connect = require('gulp-connect')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer');

gulp.task('less2css', function () {
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['Android >= 4.0','IOS >= 7'],
            cascade: false
        }))
        .pipe(gulp.dest('src'))
})

gulp.task('webserver', function () {
    connect.server({
        host: '192.168.1.112',// 本地的ip
        livereload: true,
        port: 8080
    })
})

// 监听less文件变化，随时执行less任务
gulp.task('lessAuto2css', function () {
    gulp.watch('src/*.less', ['less2css'])
})

gulp.task('default', ['less2css', 'lessAuto2css', 'webserver'])
