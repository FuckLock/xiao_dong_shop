/**
 * @Author: baodongdong
 * @Date:   2017-11-18T18:23:19+08:00
 * @Last modified by:   baodongdong
 * @Last modified time: 2017-11-18T18:25:24+08:00
 */

 var _mm = require('util/mm.js')
 var _cart = {
   // 退出
   getCartCount: function(resolve, reject){
     _mm.request({
       url: _mm.getServiceUrl('/cart/get_cart_product_count.do'),
       success: resolve,
       error: reject
     });
   }
 }

 module.exports = _cart;
