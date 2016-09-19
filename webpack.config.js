const webpack = require('webpack');
const path    = require('path');

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
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
};
