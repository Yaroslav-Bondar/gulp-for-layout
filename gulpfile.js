const {watch, series, parallel} = require('gulp'); 

const browserSync = require('browser-sync').create();

// configuration 
const path = require('./config/path.js');

// tasks:
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const pug = require('./task/pug.js');
const css = require('./task/css.js');
const sass = require('./task/sass.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');

// plugins

// server update 
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
        }
    });
}

// observation html
const watcherHtml = () => {
    watch(path.html.watch, html).on('all', browserSync.reload);
    // watch(path.css.watch, css).on('all', browserSync.reload);
    watch(path.sass.watch, sass).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
}
// observation pug
const watcherPug = () => {
    watch(path.pug.watch, pug).on('all', browserSync.reload);
    // watch(path.css.watch, css).on('all', browserSync.reload);
    watch(path.sass.watch, sass).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);}
// task export
// exports.server = server;
exports.clear = clear;
exports.pug = pug;
exports.css = css;
exports.sass = sass;
exports.js = js;
exports.img = img;
exports.html = html;
exports.font = font; 
// assembly
exports.devPug = series(clear, parallel(pug, css, js, img, font), parallel(server, watcherPug));
exports.devHtml = series(clear, parallel(html, sass, js, img, font), parallel(server, watcherHtml));