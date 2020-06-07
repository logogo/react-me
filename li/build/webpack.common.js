const path = require('path');
const fs = require("fs"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const merge = require("webpack-merge");
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
        $ : 'jquery'
    })
];

const files = fs.readdirSync(path.resolve(__dirname, '../dll'))
files.forEach(file => {
    if(/.*\.dll.js/.test(file)) {
        plugins.push(new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../dll', file)
        }))
    }
    if(/.*\.manifest.json/.test(file)) {
        plugins.push(new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll', file)
        }))
    }
});

const commConfig = {
    entry: './src/index.js',
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }, {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 10240
                    }
                } 
            }, {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader'
                } 
            }
        ],
    },
    plugins,
    optimization: {
        usedExports: true, //tree Shaking
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors'
                }
            }
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    }
}

module.exports = (env)=>{
    if(env && env.production){
        return merge(commConfig, prodConfig)
    }
    return merge(commConfig, devConfig)
}