/*
* @Author: baodongdong
* @Date:   2017-11-10 14:06:00
* @Last Modified by:   baodongdong
* @Last Modified time: 2017-11-10 17:51:09
*/
var Hogan = require('hogan.js');
var conf = {
	serviceHost : ''
}
var _mm = {
	  // 网络请求
		request: function (param) {
			$.ajax({
				type  			: param.method 	|| 'get',
				url					: param.url    	|| '',
				dataType		: param.type 		|| 'json',
				data        : param.data 		|| '',
				success     : function(res){	
					alert(res.data);
				},
				error       : function(err){
					alert(err.data);
				}
			});
		},
		// 获取服务器地址
		getServiceUrl: function(path){
			return conf.serviceHost + path;
		},
		// 获取url参数
		getUrlParam: function(name){
			var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
			alert(window.location.search.substr(1).match(reg))
      var result  = window.location.search.substr(1).match(reg);
      return result ? decodeURIComponent(result[2]) : null;
		},
		// 渲染html
		renderHtml: function(htmlTemplate, data){
			var template = Hogan.compile(htmlTemplate);
			var result = template.render(data);
			return result;
		}
}


module.exports = _mm;