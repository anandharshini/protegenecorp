var express = require('express');
var path = require('path');

var lessMiddleware = require('less-middleware');

var app = express();

//configure app
app.set('env', process.env.NODE_ENV || 'development');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

//use middleware
app.use(express.static(path.join(__dirname,'bower_components')));

app.use(lessMiddleware(path.join(__dirname , 'bower_components')));

//use router
app.use(require('./todos.js'));

app.listen(3000, function(){
	console.log('port 3000');
});