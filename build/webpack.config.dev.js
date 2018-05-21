'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../static/dist')
    },
    module: {
        rules: [
            {
                test: /\.scss*/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}