const HtmlWebpackPlugin = require('html-webpack-plugin');
const { options } = require('less');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/test.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    },
                ],
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.styl$/,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ],
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                loader:["file-loader"]
            }
        ],
    },
}

