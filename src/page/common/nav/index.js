/**
 * @Author: baodongdong
 * @Date:   2017-11-18T16:47:40+08:00
 * @Last modified by:   baodongdong
 * @Last modified time: 2017-11-18T18:57:01+08:00
 */

require('./index.css')
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
// 导航
var nav = {
  init: function(){
    this.bindEvent();
    this.loadUserInfo();
    this.loadCartCount();
    return this;
  },
  bindEvent: function () {
    // 登录点击事件
    $(".js-login").click(function(){
      _mm.doLogin();
    });
    // 注册点击事件
    $(".js-register").click(function(){
      window.location.href = './register.html';
    });
    //退出点击事件
    $(".js-logout").click(function(){
      _user.logout(function(res){
        window.location.reload();
      }, function (err) {
        _mm.errorTips(err);
      });
    });
  },
  // 加载用户信息
  loadUserInfo: function () {
    _user.checkLogin(function(res){
      $('.user.not-login').hide().siblings('.user.user-login').show().find('.username').text(res.username);
    },function () {
      // do noting
    });
  },
  // 加载购物车数量
  loadCartCount: function () {
    _cart.getCartCount(function (res) {
      $('.nav .cart-cont').text(res || 0);
    },function () {
      $('.nav .cart-cont').text(0);
    });
  }
}

module.exports = nav.init();
