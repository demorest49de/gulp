import gulp from 'gulp';
import browserSync from 'browser-sync';
import cssImport from 'gulp-cssimport';

// tasks

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
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch([
        './src/img/**/*',
        './src/font/**/*'
    ], copy);
};

// launch

// export default gulp.parallel(html, css, js, json, img);
export default gulp.series(
    gulp.parallel(html, css, js, json, copy),
    server
);