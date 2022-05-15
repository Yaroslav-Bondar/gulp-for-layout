const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');


// plugins
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html'); // to select image type in html (source srcset=) 


// html processing
const html = () => {
    return src(path.html.src)
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({title: 'before compression'}))
    // .pipe(htmlMin(app.htmlMin))
    .pipe(size({title: 'after compression'}))
    .pipe(dest(path.html.dest))
}

module.exports = html;