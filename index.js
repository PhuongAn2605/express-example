var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index', {//path
		name: 'Phuong'
	});
});

// app.get('/styles/custom.css', (req, res)=> {
// 	res.send('abc');
// });

app.use('/users', userRoute);

app.listen(port, () => {
	console.log('Example app listening at http://localhost:${port}');
});