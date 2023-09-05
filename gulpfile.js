import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import cssImport from 'gulp-cssimport';
import {deleteAsync} from 'del';

// tasks

const sass = gulpSass(sassPkg);

export const html = () => gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist'));

export const css = () => gulp
    .src('src/css/**/*.css')
    .pipe(cssImport({
        extensions: ['css'],
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());

export const style = () => gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
;

export const js = () => gulp
    .src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());

export const json = () => gulp
    .src('src/*.json')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

export const copy = () => gulp
    .src([
        'src/font/**/*',
        'src/img/**/*'
    ], {
        base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({
        once: true
    }));

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        // tunnel: true,
        server: {
            baseDir: 'dist'
        }
    });
    
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/css/**/*.css', css);
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch([
        './src/img/**/*',
        './src/font/**/*'
    ], copy);
};

export const clear = () => deleteAsync('dist/**/*', {force: true,});

// launch

export const base = gulp.parallel(html, style, js, json, copy);

export const build = gulp.series(clear, base);

export default gulp.series(base, server);