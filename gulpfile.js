import gulp from 'gulp';
import browserSync from 'browser-sync';

// tasks

export const html = () => gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist'));

export const css = () => gulp
    .src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

export const js = () => gulp
    .src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));

export const json = () => gulp
    .src('src/*.json')
    .pipe(gulp.dest('dist'));

export const img = () => gulp
    .src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'));

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        tunnel: true,
        server: {
            baseDir: 'dist'
        }
    });
};

// start

export default gulp.parallel(html, css, js, json, img);