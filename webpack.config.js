const webpack            = require('webpack')
const path               = require('path')



const ENTRY_FILE_PATH = __dirname + '/app/client/client.js'
const OUTPUT_FILE_PATH = __dirname + '/app/public/build/'

const BUNDLE_FILE_NAME = 'bundle.js'


module.exports = {
    entry: ENTRY_FILE_PATH,
    output: {
        path: OUTPUT_FILE_PATH,
        filename: BUNDLE_FILE_NAME
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
