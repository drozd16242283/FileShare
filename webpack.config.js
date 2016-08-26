const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app/client'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'app/public'),
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
        ]
    }
}
