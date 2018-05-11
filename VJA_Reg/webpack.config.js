'use strict';
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
//const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    entry: {
        //Shared: './wwwroot/src/shared.js',
        Home: './wwwroot/src/Home/app.js'
    },
    output: {
        path: __dirname + "/wwwroot/dist/",
        //filename: "[name]_[chunkhash].js"
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader?cacheDirectory'
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'asset/',
                    publicPath: 'dist/asset',
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        //Very slow
        //new webpack.optimize.UglifyJsPlugin({
        //    output: {
        //        comments: false //No comments
        //    }
        //}),
        new CleanWebpackPlugin(['wwwroot/dist/*'], []),
        //new HardSourceWebpackPlugin()
    ],
    stats: {
        warnings: false
    }
};