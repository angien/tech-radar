var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(serveIndex(__dirname + '/public'));

app.listen(process.env.PORT || 80);

console.log('Server running on port 80');
