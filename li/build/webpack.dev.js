const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
        hot: true,
        historyApiFallback: true,
        proxy:{
            '/react': 'http://www.dell-lee.com',
            changeOrigin: true
        }
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 
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
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    }
}

module.exports = devConfig