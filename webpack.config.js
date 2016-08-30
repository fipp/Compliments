const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'umd'),
    filename: 'Compliments.min.js',
    library: 'Compliments',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};