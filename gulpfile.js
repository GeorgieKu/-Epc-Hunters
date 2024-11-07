const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scss: {
        src: 'src/style/*.scss',
        dest: 'dist/style/'
    },
    css: {
         src: 'src/style/*.css',
        dest: 'dist/style/'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    fonts: {
        src: 'src/fonts/**/*',
        dest: 'dist/fonts/'
    },
    img: {
        src: 'src/img/*',
        dest: 'dist/img/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    }
};

function styles() {
    return gulp.src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest));
}

function scripts() {
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest));
}


function fonts() {
    return gulp.src(paths.fonts.src, { encoding: false })
        .pipe(gulp.dest(paths.fonts.dest));
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
}

function css() {
    return gulp.src(paths.css.src)
        .pipe(gulp.dest(paths.css.dest));
}

function images() {
    return gulp.src(paths.img.src, { encoding: false })
        .pipe(gulp.dest(paths.img.dest));
}


function watchFiles() {
    gulp.watch(paths.scss.src, styles);
    gulp.watch(paths.js.src, scripts);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.img.src, images);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.css.src, css);
}

const build = gulp.series(gulp.parallel(styles, scripts, fonts, images, html, css));
gulp.task('default', gulp.series(build, watchFiles));