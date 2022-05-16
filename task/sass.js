const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
// const concat = require('gulp-concat'); // into one file
// const cssimport = require('gulp-cssimport'); // include @import
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso'); // min css
const size = require('gulp-size');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand'); // shortening css properties
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sassPrepros = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const webpCss = require('gulp-webp-css');

// sass processing
const sass = () => {
    return src(path.sass.src, {sourcemaps: app.isDev})
        .pipe(sassGlob()) // import path masks
        .pipe(sassPrepros())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({title: 'main.scss before compression'}))
        .pipe(dest(path.sass.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size({title: 'main.scss after compression'}))
        .pipe(dest(path.sass.dest, {sourcemaps: app.isDev}));
}

module.exports = sass;