module.exports = {
    htmlmin: {
        collapseWhitespace: true,
    },

    pug: {
        pretty: true,
        data: {
            news: require('../data/news.json'),
        },
    },

    webpack: {
        // mode: 'development',
        mode: 'production',
    },

    imgeMin: {
        verbose: true,
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    }
}