var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

require('dotenv').config();
require('./config/database');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', require('./routes/api'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app is running on port ${port}`)
});