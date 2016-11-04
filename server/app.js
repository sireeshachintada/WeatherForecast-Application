var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db='mongodb://localhost/weather';
mongoose.connect(db);
mongoose.connection.once('open',function(){
console.log("inside connection");
});

// Routing
var routes = require('./routes/index');
var sireesha_app = express();


sireesha_app.use(logger('dev'));
sireesha_app.use(bodyParser.json());
sireesha_app.use(bodyParser.urlencoded({ extended: false }));
sireesha_app.use(cookieParser());
sireesha_app.use('/', express.static(path.join(__dirname, '../client/dist')));
sireesha_app.use('/data', routes);

//catch 404 and forward to error handler
sireesha_app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
 next(err);
});

sireesha_app.get('/', function(req, res) {
    res.send('Welcome');
});

module.exports = sireesha_app;
