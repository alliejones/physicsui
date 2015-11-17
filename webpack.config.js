var webpack = require('webpack');
module.exports = {
  entry: {
    velocity: "./velocity.js",
    "velocity-friction": "./velocity-friction.js",
    spring: "./spring.js"
  },
  output: {
    path: __dirname + '/build',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  devtool: 'source-maps'
};
