const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app/client/index.js'),

    output: {
        path: path.join(__dirname, 'app/public'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
};
