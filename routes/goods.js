var express = require('express');
var router = express.Router();

var goods = require('../controllers/goods.server.controller');

// 获取商品列表
router.get('/', goods.getGoods);
// 获取商品详情
router.get('/detail', goods.getDetail);
// 商品加入购物车
router.post('/addCart', goods.addCart);

module.exports = router;
