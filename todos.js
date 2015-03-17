var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

var todoItems = [
	{id: 1, desc: 'checking 1'},
	{id: 2, desc: 'checking 2'},
	{id: 3, desc: 'checking 3'}
];

// create application/json parser 
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req,res){
	res.render('index', {
		title: 'Protegene Corporation',
		data: todoItems
	});
});

router.post('/add',urlencodedParser,function(req,res){
	var newItem = req.body.newItem;
	console.log(req.body);
	todoItems.push({ id: todoItems.length + 1, desc: newItem});
	res.redirect('/');
});

module.exports = router;