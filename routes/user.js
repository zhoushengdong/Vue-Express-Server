var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* ************
 * req 请求对象
 * res 响应对象
 * next 继续执行
 * ************/
router.post('/login', function (req, res, next) {
    console.log(req.body);
    var user = new User({
        userName: req.body.username,
        passWord: req.body.password
    });

    user.save(function (err) {
        if (err) {
            res.end('Error');
            return next();
        } else {
            User.find({}, function (err, docs) {
                if (err) {
                    res.end('Error');
                    return next();
                }
                var data = {code: 20000, data: {token: 'admin'}}
                res.json(data);
            });
        }
    });
});

// 获取用户信息
router.get('/info', function (req, res, next) {
    console.log(req.query);
    var data = {
        "code": 20000,
        "data": {
            "role": [
                "admin"
            ],
            "name": "admin",
            "avatar": "/images/DDD.jpg"
        }
    }
    res.json(data);
});

module.exports = router;