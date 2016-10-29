const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const NODE_ENV = process.env.NODE_ENV || 'development'


const INPUT_FILE       = `${__dirname}/app/client/client.js`
const OUTPUT_DIRECTORY = `${__dirname}/app/public/build/`

const BUNDLE_FILE_NAME = 'bundle.js'


const CssName = NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css'
const JsName  = NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js'


let plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV)
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    }),
    new ExtractTextPlugin('styles.css')
]

if (NODE_ENV === 'production') {
    plugins.push(
        new CleanWebpackPlugin([OUTPUT_DIRECTORY], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    )
    plugins.push(new webpack.optimize.DedupePlugin())
    plugins.push(new webpack.optimize.OccurenceOrderPlugin())
}


module.exports = {
    entry: INPUT_FILE,
    resolve: {
        root: `${__dirname}/app`,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins,
    output: {
        path: OUTPUT_DIRECTORY,
        filename: BUNDLE_FILE_NAME
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/,  loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    },
};
