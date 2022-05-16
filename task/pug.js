const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
// get all gulp files from package.json
const gp = require('gulp-load-plugins')();

// pug processing
const pug = () => {
    return src(path.pug.src)
        .pipe(gp.pug(app.pug))
        .pipe(gp.webpHtml()) // to select image type in html(source srcset=)
        .pipe(dest(path.pug.dest));
}

module.exports = pug;