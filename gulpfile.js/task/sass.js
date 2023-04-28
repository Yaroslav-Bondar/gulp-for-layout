const merge = require('merge-stream');
// plugins
const sassPrepros = require('gulp-sass')(require('sass'));

const sass = () => {
  let tasks = $.path.pages.map(page => {
    return $.gulp.src($.path.sass.src + page + '/*.{sass,scss}')
        .pipe($.gp.sassGlob()) // import $.path masks
        .pipe(sassPrepros())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand()) // shortening css properties
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({title: 'main.scss before compression'}))
        .pipe($.gulp.dest($.path.sass.dest + page + '/styles', {sourcemaps: $.app.isDev}))
        .pipe($.gp.rename({suffix: ".min"}))
        .pipe($.gp.csso())
        .pipe($.gp.size({title: 'main.scss after compression'}))
        .pipe($.gulp.dest($.path.sass.dest + page + '/styles',  {sourcemaps: $.app.isDev}));
    });

  return merge(tasks);
}

module.exports = sass;