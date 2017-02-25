var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [ 'webpack-hot-middleware/client', './public/index' ],
    home: [ 'webpack-hot-middleware/client', './public/home' ],
  },
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle_[name].js', publicPath: '' },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel' ], exclude: /node_modules/, include: __dirname },
    ],
  },
};
