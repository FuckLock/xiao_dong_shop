/*
* @Author: baodongdong
* @Date:   2017-11-08 14:06:36
* @Last Modified by:   baodongdong
* @Last Modified time: 2017-11-10 16:27:51
*/
var _mm = require('util/mm.js');

_mm.request({
	url: './test.do',
	success: function(res) {
		console.log(res);
	},
	error: function(err) {
		console.log(err);
	}
});

// console.log(_mm.getUrlParam("test"));
