/**
 * @Author: baodongdong
 * @Date:   2017-11-18T17:58:23+08:00
 * @Last modified by:   baodongdong
 * @Last modified time: 2017-11-18T18:39:20+08:00
 */

var _mm = require('util/mm.js')
var _user = {
  checkLogin: function (resolve, reject) {
    _mm.request({
      url: _mm.getServiceUrl('/user/get_user_info.do'),
      success: resolve,
      error: reject
    });
  },
  // 退出
  logout: function(resolve, reject){
    _mm.request({
      url: _mm.getServiceUrl('/user/logout.do'),
      method: 'POST',
      success: resolve,
      error: reject
    });
  }
}

module.exports = _user;
