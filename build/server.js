'use strict';

require('dotenv').config();

var path = require('path');
var Koa = require('koa');
var convert = require('koa-convert');
var app = new Koa();

// Database
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_URL);
console.log('connecting to MongoDB...');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  return console.log('Connected to db');
});

// WEBPACK DEV middleware
var webpack = require('webpack');
// const webpackConfig = require(path.join(__dirname, '/webpack.config'));
var webpackConfig = require('.././webpack.config');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var compiler = webpack(webpackConfig);
app.use(convert(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
})));
app.use(convert(webpackHotMiddleware(compiler)));

// Logger, favicon and bodyparser middlewares
var logger = require('koa-logger');
var favicon = require('koa-favicon');
var bodyParser = require('koa-bodyparser');
app.use(logger());
app.use(favicon(path.join(__dirname, '.././public/favicon.ico')));
app.use(bodyParser());

// Routes
// const serve = require('koa-static');
// app.use(serve('.'));
// Authentication
// require('./src/auth');
var router = require('./routes/basicRoutes');

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || process.argv[2] || 4000);
console.log('Server listening on ' + (process.env.PORT || process.argv[2] || 4000));