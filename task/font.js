const {src, dest} = require('gulp'); 

// configuration 
const path = require('../config/path.js');
const app = require('../config/app.js');
// plugins
// const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer'); // processing only new or changed files 
const fonter = require('gulp-fonter'); // convert fonts
// font processing
const font = () => {
    return src(path.font.src)
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest));
}

module.exports = font;