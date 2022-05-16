const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
const concat = require('gulp-concat'); // into one file
const cssimport = require('gulp-cssimport'); // include @import
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso'); // min css
const size = require('gulp-size');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand'); // shortening css properties
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

// css processing
const css = () => {
    return src(path.css.src, {sourcemaps: app.isDev})
        .pipe(concat('main.css'))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({title: 'main.css before compression'}))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size({title: 'main.css after compression'}))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}));
}

module.exports = css;