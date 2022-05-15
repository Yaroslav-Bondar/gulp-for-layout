const del = require('del');

// configuration 
const path = require('../config/path.js');

// delete dir
function clear() {
    return del(path.root);
}

module.exports = clear;