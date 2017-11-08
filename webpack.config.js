/*
* @Author: baodongdong
* @Date:   2017-11-08 14:37:09
* @Last Modified by:   baodongdong
* @Last Modified time: 2017-11-08 16:34:33
*/

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: {
    		'common': ['./src/page/common/index.js'],
    		'index' : ['./src/page/index/index.js'],
    		'login' : ['./src/page/login/index.js'],
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    },
    externals : {
    		'jquery' : 'window.jQuery'
    },
    module: {
	    loaders: [
	      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") }
	    ]
  	},
    plugins: [
    	new webpack.optimize.CommonsChunkPlugin({
    		name : 'common',
    		filename : 'js/base.js'
    	}),
    	new ExtractTextPlugin("css/[name].css"),
    	new HtmlWebpackPlugin({
    		template : 'src/view/index.html',
    		filename : 'view/index.html',
    		inject   : true,
    		hash     : true,
    		chunks   : ['common', 'index']
    	})
    ]
};

module.exports = config;	