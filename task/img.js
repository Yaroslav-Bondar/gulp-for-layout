const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer'); // processing only new or changed files 
const webp = require('gulp-webp'); // convert img files to webp format
// img processing
const img = () => {
    return src(path.img.src)
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(imageMin(app.imageMin))
    .pipe(dest(path.img.dest));
}

module.exports = img;