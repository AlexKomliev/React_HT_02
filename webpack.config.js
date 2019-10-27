const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './dev/script.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bundle.js'
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
			}
		]
	},
	plugins:[
		new CopyWebpackPlugin([
			{
				from: path.resolve('./dev/static'),
				to: path.resolve('./site')
			}
		])
	]
};