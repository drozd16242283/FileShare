const webpack = require('webpack')
const path = require('path')


const NODE_ENV = process.env.NODE_ENV || 'development';

const ENTRY_FILE_PATH = __dirname + '/app/client/client.js'
const OUTPUT_FILE_PATH = __dirname + '/app/public/build/'

const BUNDLE_FILE_NAME = 'bundle.js'


module.exports = {
    entry: ENTRY_FILE_PATH,
    output: {
        path: OUTPUT_FILE_PATH,
        filename: BUNDLE_FILE_NAME
    },

    watch: NODE_ENV == 'development',

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ],

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
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
};
