/**
 * Created by DT274 on 2016/10/20.
 */
var path = require('path')
var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devServer: {
        port: 8090
    },
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8090' })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }]
    }
}