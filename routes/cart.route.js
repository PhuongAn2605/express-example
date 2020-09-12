var express = require('express');
var router = express.Router();

var controllers = require('../controllers/router.controller');

router.get('/add/:productId', controllers.addToCart);

module.exports = router;