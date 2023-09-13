import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import cssImport from 'gulp-cssimport';
import {deleteAsync} from 'del';
import htmlMin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import gulpConcat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
import gulpImage from "gulp-image";
import gulpwebp from 'gulp-webp';
import gulpavif from 'gulp-avif';


const prepros = true;

const sass = gulpSass(sassPkg);

// tasks

export const html = () => gulp
    .src('src/*.html')
    .pipe(htmlMin({
        removeComments: true,
        collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

export const style = () => {
    if (prepros) {
        return gulp
            .src('src/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS({
                2: {
                    specialComments: 0,
                }
            }))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream());
    }
    
    return gulp
        .src('src/css/**/*.css')
        .pipe(cssImport({
            extensions: ['css'],
        }))
        .pipe(cleanCSS({
            2: {
                specialComments: 0,
            }
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
};

export const js = () => gulp
    .src('src/js/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(terser())
    // .pipe(gulpConcat('index.min.js'))
    .pipe(sourceMaps.write('dist/maps'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());


export const img = () => gulp
    .src('src/img/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpImage({}))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const webp = () => gulp
    .src('src/img/**/*.{jpg,jpeg,png}')
    .pipe(gulpwebp({
        quality: 65,
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const avif = () => gulp
    .src('src/img/**/*.{jpg,jpeg,png}')
    .pipe(gulpavif({
        quality: 55,
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const copy = () => gulp
    .src('src/font/**/*', {
        base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({
        once: true
    }));

export const json = () => gulp
    .src('src/*.json')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        // tunnel: true,
        server: {
            baseDir: 'dist'
        }
    });
    
    gulp.watch('src/**/*.html', html);
    gulp.watch(prepros ? 'src/scss/**/*.scss' : 'src/css/**/*.css', style);
    gulp.watch('src/img/**/*.{jpg,jpeg,png,svg,gif}', img);
    gulp.watch('src/img/**/*.{jpg,jpeg,png,svg,gif}', img);
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/font/**/*', copy);
    gulp.watch('src/img/**/*.{jpg,jpeg,png}', webp);
    gulp.watch('src/img/**/*.{jpg,jpeg,png}', avif);
};

export const clear = () => deleteAsync('dist/**/*', {force: true,});

// launch

export const base = gulp.parallel(html, style, js, json,
    // img,
    copy);

export const build = gulp.series(clear, base);

export default gulp.series(base, server);