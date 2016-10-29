require('babel-core/register')

/*var arr = ['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'];
arr.forEach((ext) => require.extensions[ext] = () => {});*/

require('babel-polyfill')

require('dotenv').config()

var app = require('./app/server/server')

module.exports = app
