const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './dev/script.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bundle.[chunkhash].js'
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'site'),
		host: 'localhost',
		port: 9090,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: [MiniCSSExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins:[
		new WebpackMd5Hash(),
		new MiniCSSExtractPlugin({
			filename: 'style.[chunkhash].css'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: './dev/static/index.html',
			filename: "index.html"
		})
	]
};