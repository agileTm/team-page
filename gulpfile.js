const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    stripDebug = require('gulp-strip-debug'),
    minifyHTML = require('gulp-minify-html'),
    runSequence = require('run-sequence'),
    del = require('del');

gulp.task('img', () =>
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

// Scripts
gulp.task('script-lib-move', () =>
    gulp.src(['src/lib/*.js'])
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib')));

// Scripts
gulp.task('scripts', () =>
    gulp.src(['src/js/lang.js', 'src/js/i18n.js', 'src/js/custom.js'])
        .pipe(concat('app.js'))
        // .pipe(stripDebug())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')));


// Styles
gulp.task('styles', () =>
    gulp.src(['src/css/*.css'])
        /*.pipe(concatCss('style.css'))*/
        .pipe(rename({suffix: '.min'}))
        /*.pipe(minifycss())*/
        .pipe(gulp.dest('dist/css')));

// index.html 파일 복사
gulp.task('index-min', () =>
    gulp.src('src/index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/')));


/**
 * dist 폴더 삭제
 */
gulp.task('clean', () => {
    del('dist');
});

gulp.task('build', done =>
    runSequence(
        'clean',
        'styles',
        'scripts',
        'index-min',
        'script-lib-move',
        'img',
        done
    ));

gulp.task('simple', done =>
    runSequence(
        'styles',
        'scripts',
        'index-min',
        'script-lib-move',
        done
    ));

// Watch
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('src/css/*.css', ['styles']);

    // Watch .js files
    gulp.watch(['src/js/**/*.js'], ['scripts']);

    // Watch index files
    gulp.watch('src/*.html', ['index-min']);

    // Watch img files
    gulp.watch(['src/img/**/*'], ['img']);
});