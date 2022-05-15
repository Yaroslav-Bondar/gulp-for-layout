const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
const babel = require('gulp-babel');  // use the latest features of java script
const uglify = require('gulp-uglify');  // min js file
const rename = require('gulp-rename');
const webpack = require('webpack-stream'); // bundling js modules

// js processing
const js = () => {
    return src(path.js.src, {sourcemaps: true})
    .pipe(babel())
    .pipe(webpack(app.webpack))  
    // .pipe(dest(path.js.dest, {sourcemaps: true}))
    // .pipe(rename({suffix: ".min"}))
    // .pipe(uglify())
    .pipe(dest(path.js.dest, {sourcemaps: true}));
}

module.exports = js;