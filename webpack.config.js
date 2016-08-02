const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer');

const SCSS_LOADER = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
};

const JS_LOADER = {
  test : /\.jsx?$/,
  loaders : ['babel'],
  include: path.join(__dirname, 'src'),
  exclude: /node_modules/
};

const CSS_PLUGIN = new ExtractTextPlugin(path.join('css', '[name].css'));

const config = {
  entry: {
    shiban: path.join(__dirname, 'src', 'webpack'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: path.join('js', '[name].js'),
  },
  module: {
    loaders: [SCSS_LOADER, JS_LOADER],
  },
  postcss: [autoprefixer({ browsers: ['ie >= 9', 'last 2 versions'] })],
  plugins: [CSS_PLUGIN],
};

module.exports = config;
