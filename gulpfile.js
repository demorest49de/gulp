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
import {stream as critical} from 'critical';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';

const prepros = true;

let dev = false;

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
            .pipe(gulpif(dev, sourceMaps.init()))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(cleanCSS({
                2: {
                    specialComments: 0,
                }
            }))
            .pipe(gulpif(dev, sourceMaps.write('../maps')))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream());
    }
    
    return gulp
        .src('src/css/**/*.css')
        .pipe(gulpif(dev, sourceMaps.init()))
        .pipe(cssImport({
            extensions: ['css'],
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            2: {
                specialComments: 0,
            }
        }))
        .pipe(gulpif(dev, sourceMaps.write('../maps')))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
};

export const js = () => gulp
    .src('src/js/**/*.js')
    .pipe(gulpif(dev, sourceMaps.init()))
    // .pipe(babel({
    //     presets: ['@babel/preset-env'],
    //     ignore: ['src/js/**/*.min.js']
    // }))
    .pipe(terser())
    // .pipe(gulpConcat('index.min.js'))
    .pipe(gulpif(dev, sourceMaps.write('../maps')))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());


export const img = () => gulp
    // .src('src/img/**/*.{jpg,jpeg,png,svg,gif}')
    .src('src/img/**/*.{jpg,jpeg,png,gif}')
    .pipe(gulpif(!dev, gulpImage(
        {
            optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
            pngquant: ['--speed=1', '--force', 256],
            zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
            jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
            mozjpeg: ['-optimize', '-progressive'],
            gifsicle: ['--optimize'],
            svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
        }
    )))
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

export const critCSS = () => gulp
    .src('dist/*.html')
    .pipe(critical({
        base: 'dist/',
        inline: true,
        css: ['dist/css/index.css']
    }))
    .on('error', err => {
        console.error(err.message);
    })
    .pipe(gulp.dest('dist'));

export const copy = () => gulp
    .src([
        'src/font/**/*',
        'src/img/**/*.svg',
        'src/.htaccess'
    ], {
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

export const develop = async () => {
    dev = true;
};

export const base = gulp.parallel(html, style, js, json,
    img, avif, webp,
    copy);

export const noimg = gulp.parallel(html, style, js, json, copy);

export const build = gulp.series(clear, base, critCSS);

export const start = gulp.series(server);

export default gulp.series(develop, base, server);