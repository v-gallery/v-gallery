const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
    return src('static/v-gallery/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('static'));
}

function watchTask() {
    watch(['static/v-gallery/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);