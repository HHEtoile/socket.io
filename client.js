var express = require('express');
var app = express();
app.get('/', function(req, res) {
   res.sendfile('index.html', {root: __dirname + '/client' });
});
app.use('/client', express.static(__dirname + '/client'))
app.listen(1111);