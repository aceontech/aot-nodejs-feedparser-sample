
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var feed = require('./routes/feed');
var http = require('http');
var path = require('path');

// Default Express setup
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Home page route
app.get('/', routes.index);

// Add route to invoke feed.parse(req,res)
app.get('/feed/:feedUrl', feed.parse);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
