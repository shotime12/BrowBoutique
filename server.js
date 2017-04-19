var express = require('express');
var path = require('path');
var bp = require('body-parser');
var root = __dirname;

var app = express();

app.use(bp.json());

app.use(express.static(path.join(root, 'client')))
app.use(express.static(path.join(root, 'node_modules')))
app.use(express.static(path.join(root, 'bower_components')))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function(){
	console.log('listening in port 8000')
})
