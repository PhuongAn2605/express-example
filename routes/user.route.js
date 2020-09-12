var express = require('express');
var router = express.Router();
var multer = require('multer');

var controllers = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var upload = multer({ dest: './public/uploads/' })



router.get('/cookie', (req, res, next) => {
	res.cookie('user-id', 12345);
	res.send('Hello');
});

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get); 

router.post('/create', 
	upload.single('avatar'), 
	validate.postCreate, 
	controllers.postCreate
	);


module.exports = router;