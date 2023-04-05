const merge = require('merge-stream');

const html = () => {
    var tasks = $.path.pages.map(page => {
        return $.gulp.src($.path.html.src + page + '/*.html')
            .pipe($.gp.fileInclude())
            .pipe($.gp.webpHtml()) // to select image type in html (source srcset=)
            .pipe($.gp.size({title: 'before compression'}))
            .pipe($.gp.if($.app.isProd, $.gp.htmlmin($.app.htmlmin))) //  launch of the plugin depending on the condition
            .pipe($.gp.size({title: 'after compression'}))
            .pipe($.gulp.dest($.path.html.dest + page));
    });
    // Placing the main file in the root folder
    // let root = $.gulp.src('./src/html/main/*.html')
    // .pipe($.gp.fileInclude())
    // .pipe($.gp.webpHtml()) // to select image type in html (source srcset=)
    // .pipe($.gp.size({title: 'before compression'}))
    // .pipe($.gp.if($.app.isProd, $.gp.htmlmin($.app.htmlmin))) //  launch of the plugin depending on the condition
    // .pipe($.gp.size({title: 'after compression'}))
    // .pipe($.gulp.dest($.path.html.dest))
    return merge(tasks);
};

module.exports = html;

