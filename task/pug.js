const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
const pugs = require('gulp-pug');
const webpHtml = require('gulp-webp-html'); // to select image type in html(source srcset=) 

// pug processing
const pug = () => {
    return src(path.pug.src)
        .pipe(pugs(app.pug))
        .pipe(webpHtml())
        .pipe(dest(path.pug.dest));
}

module.exports = pug;