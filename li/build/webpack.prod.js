const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const prodConfig = {
    mode: 'production',
    devtool: 'none',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
    }
}

module.exports = prodConfig
