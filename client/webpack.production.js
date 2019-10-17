var webpack = require('webpack');
var merge = require('webpack-merge');

var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
    entry: [
        'client/index.js'
    ],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
    ],
});