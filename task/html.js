const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugins
// get all gulp files from package.json
const gp = require('gulp-load-plugins')();

// html processing
const html = () => {
    return src(path.html.src)
    .pipe(gp.fileInclude())
    .pipe(gp.webpHtml()) // to select image type in html (source srcset=)
    .pipe(gp.size({title: 'before compression'}))
    // .pigp.pe(htmlMin(app.htmlMin))
    .pipe(gp.size({title: 'after compression'}))
    .pipe(dest(path.html.dest))
}

module.exports = html;