'use strict';

//gulp
import gulp from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import {deleteAsync} from 'del';

//html*pug
import htmlMin from 'gulp-htmlmin';
import gulppug from 'gulp-pug';

//css
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';

const compSass = gulpSass((sassPkg));
import sourceMaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gcmq from 'gulp-group-css-media-queries';
import {stream as critical} from 'critical';

//js
import terser from 'gulp-terser';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';

//img

import tinyPng from 'gulp-tinypng-compress';
import gulpImage from "gulp-image";
import gulpwebp from 'gulp-webp';
import gulpavif from 'gulp-avif';
import svgSprite from 'gulp-svg-sprite';

let dev = false;

const path = {
    dist: {
        base: 'dist/',
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        cssIndex: 'dist/css/index.min.css',
        img: 'dist/img',
        font: 'dist/font',
    }, src: {
        base: 'src/',
        html: 'src/*.html',
        pug: 'src/pug/*.pug',
        scss: 'src/scss/**/*.scss',
        js: 'src/js/index.js',
        img: 'src/img/**/*.*',
        svg: 'src/svg/**/*.svg',
        imgF: 'src/img/**/*.{jpg,jpeg,png}',
        asset: ['src/font/**/*.*', 'src/icons/**/*.*', 'src/video/**/*.*', 'src/public/**/*.*', 'src/robots.txt', 'src/site.webmanifest', 'src/sitemap.xml'],
    }, watch: {
        html: 'src/*.html',
        js: 'src/**/*.js',
        pug: 'src/**/*.pug',
        css: 'src/**/*.scss',
        svg: 'src/svg/**/*.svg',
        img: 'src/img/**/*.*',
        imgF: 'src/img/**/*.{jpg,jpeg,png}',
    }, clean: './dist', cleanImg: './dist/images'
};

// tasks

export const html = () => gulp
    .src(path.src.html)
    .pipe(gulpif(!dev, htmlMin({
        removeComments: true, collapseWhitespace: true,
    })))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.stream());

export const pug = () => gulp
    .src(path.src.pug)
    .pipe(gulppug({
        pretty: true,
    })
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        }))
    .pipe(gulpif(!dev, htmlMin({
        removeComments: true, collapseWhitespace: true,
    })))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.stream());


export const scss = () => {
    gulp
        .src(path.src.scss)
        .pipe(gulpif(dev, sourceMaps.init()))
        .pipe(compSass().on('error', compSass.logError))
        .pipe(gulpif(!dev, autoprefixer({
            cascade: false, grid: false
        })))
        .pipe(gulpif(!dev, gcmq()))
        .pipe(gulpif(!dev, gulp.dest(path.dist.css)))
        .pipe(cleanCSS({
            2: {
                specialComments: 0,
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpif(dev, sourceMaps.write('../maps')))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream());
};

export const webpackConf = {
    mode: dev ? 'development' : 'production', devtool: dev ? 'eval-source-map' : false, optimization: {
        minimize: false
    }, output: {
        filename: 'index.js',
    }, module: {
        rules: []
    }
};

if (!dev) {
    webpackConf.module.rules.push({
        test: /\.(js)$/, exclude: /(node_modules)/, loader: 'babel-loader'
    });
}

export const js = () => gulp
    .src(path.src.js)
    .pipe(plumber())
    .pipe(webpackStream(webpackConf, webpack))
    .pipe(gulpif(!dev, gulp.dest(path.dist.js)))
    .pipe(gulpif(!dev, terser()))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.stream());


export const img = () => gulp
    .src(path.src.img)
    // .pipe(gulpif(!dev, tinyPng({
    //     key: 'API_KEY_HERE',
    //     summarize: true,
    //     log: true
    // })))
    .pipe(gulpif(!dev, gulpImage({
        optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
        pngquant: ['--speed=1', '--force', 256],
        zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
        jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
        mozjpeg: ['-optimize', '-progressive'],
        gifsicle: ['--optimize'],
        svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
    })))
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.stream({
        once: true
    }));

export const svg = () => gulp
    .src(path.src.svg)
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.stream({
        once: true
    }));

export const webp = () => gulp
    .src(path.src.imgF)
    .pipe(gulpwebp({
        quality: dev ? 100 : 65,
    }))
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.stream({
        once: true
    }));

export const avif = () => gulp
    .src(path.src.imgF)
    .pipe(gulpavif({
        quality: dev ? 100 : 65,
    }))
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.stream({
        once: true
    }));

export const critCSS = () => gulp
    .src(path.src.html)
    .pipe(critical({
        base: path.dist.base,
        inline: true,
        css: [path.dist.cssIndex]
    }))
    .on('error', err => {
        console.error(err.message);
    })
    .pipe(gulp.dest(path.dist.base));

export const copy = () => gulp
    .src([path.src.asset], {
        base: path.src.base
    })
    .pipe(gulp.dest(path.dist.base))
    .pipe(browserSync.stream({
        once: true
    }));

export const json = () => gulp
    .src('src/*.json')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

export const server = () => {
    browserSync.init({
        ui: false, notify: false, // tunnel: true,
        server: {
            baseDir: 'dist'
        }
    });
    
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/scss/**/*.scss', scss);
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

export const base = gulp.parallel(html, scss, js, json, img, avif, webp, copy);

export const noimg = gulp.parallel(html, scss, js, json, copy);

export const build = gulp.series(clear, base, critCSS);

export const start = gulp.series(server);

export default gulp.series(develop, base, server);