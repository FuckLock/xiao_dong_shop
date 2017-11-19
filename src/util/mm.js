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
			var _this = this
			$.ajax({
				type  			: param.method 	|| 'get',
				url					: param.url    	|| '',
				dataType		: param.type 		|| 'json',
				data        : param.data 		|| '',
				success     : function(res){
					if(res.status === '0'){
						typeof param.success === 'function' && param.success(res.data, res.msg);
					}
					// 没有登录状态，强制登录
					else if(res.status === '10'){
						_this.doLogin();
					}
					// 请求数据错误
					else if(res.status === '1'){
						typeof param.error === 'function' && param.error(res.msg);
					}
				},
				error       : function(err){
					typeof param.error === 'function' && param.error(err.statusText);
				}
			});
		},
		doLogin : function () {
			window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
		},
    goHome : function(){
        window.location.href = './index.html';
    },
		// 获取服务器地址
		getServiceUrl: function(path){
			return conf.serviceHost + path;
		},
		// 获取url参数
		getUrlParam: function(name){
			var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var result  = window.location.search.substr(1).match(reg);
      return result ? decodeURIComponent(result[2]) : null;
		},
		// 渲染html
		renderHtml: function(htmlTemplate, data){
			var template = Hogan.compile(htmlTemplate);
			var result = template.render(data);
			return result;
		},
		// 成功提示
		successTips: function (msg) {
			alert(msg || "操作成功");
		},
		// 错误提示
		errorTips: function (msg) {
			alert(msg || '哪里不对了')
		},
		// 验证
		validate: function(value, type){
			var value = $.trim(value);
			 // 非空验证
			 if('require' === type){
					 return !!value;
			 }
			 // 手机号验证
			 if('phone' === type){
					 return /^1\d{10}$/.test(value);
			 }
			 // 邮箱格式验证
			 if('email' === type){
					 return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
			 }
		}
}


module.exports = _mm;
