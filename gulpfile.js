import gulp from 'gulp';
import browserSync from 'browser-sync';

// tasks

export const html = () => gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist'));

export const css = () => gulp
    .src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());

export const js = () => gulp
    .src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());

export const json = () => gulp
    .src('src/*.json')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

// export const img = () => gulp
//     .src('src/img/**/*.*')
//     .pipe(gulp.dest('dist/img'))
//     .pipe(browserSync.stream());

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        tunnel: true,
        server: {
            baseDir: 'dist'
        }
    });
    1
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/css/**/*.css', css);
    gulp.watch('./src/js/**/*.js', js);
};

// launch

// export default gulp.parallel(html, css, js, json, img);
export default gulp.series(
    gulp.parallel(html, css, js, json),
    server
);