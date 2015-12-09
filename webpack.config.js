var webpack = require('webpack');

var entries = [
  'oop/velocity',
  'oop/velocity-friction',
  'oop/spring',
  'fp/velocity'
];

var createEntries = function(entries) {
  var e = {};
  entries.forEach(name => {
    e[name] = './'+name+'.js';
  });
  return e;
};

module.exports = {
  entry: createEntries(entries),
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
