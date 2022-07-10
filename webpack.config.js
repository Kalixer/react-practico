const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, '/src/components/'),
			'@containers': path.resolve(__dirname, '/src/containers/'),
			'@pages': path.resolve(__dirname, '/src/pages/'),
			'@icons': path.resolve(__dirname, '/src/assets/icons/'),
			'@logos': path.resolve(__dirname, '/src/assets/logos/'),
			'@styles': path.resolve(__dirname, '/src/styles/'),
			'@routes': path.resolve(__dirname, '/src/routes/'),
			'@hooks': path.resolve(__dirname, '/src/hooks/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset',
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		historyApiFallback: true,
	}
}