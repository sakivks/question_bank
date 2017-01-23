'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var Koa = require('koa');
var path = require('path');
var convert = require('koa-convert');
var app = new Koa();

// Database
var mongoose = require('mongoose');
mongoose.Promise = _promise2.default;
mongoose.connect(process.env.DB_URL);
console.log('connecting to MongoDB...');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  return console.log('Connected to db');
});

// WEBPACK DEV middleware
if (process.env.NODE_ENV === 'development') {
  var webpack = require('webpack');
  var webpackConfig = require('.././webpack.development.config');
  var webpackDevMiddleware = require('koa-webpack-dev-middleware');
  var webpackHotMiddleware = require('koa-webpack-hot-middleware');
  var compiler = webpack(webpackConfig);
  app.use(convert(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath })));
  app.use(convert(webpackHotMiddleware(compiler)));
}

// Logger, favicon and bodyparser middlewares
var logger = require('koa-logger');
var favicon = require('koa-favicon');
var bodyParser = require('koa-bodyparser');
var serve = require('koa-static');
app.use(logger());
app.use(favicon(path.join(__dirname, '.././public/favicon.ico')));
app.use(bodyParser());
app.use(serve('public/dist'));

// Routes
// const serve = require('koa-static');
// app.use(serve('.'));
// Authentication
// require('./src/auth');
var router = require('./routes/basicRoutes');

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || process.argv[2] || 4000);
console.log('Server listening on ' + (process.env.PORT || process.argv[2] || 4000));