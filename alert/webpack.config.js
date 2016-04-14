var webpack = require('webpack');
module.exports = {
  entry: ['./js/app.js'],
  output: {
    filename: './bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ['babel'],
      query: {
        presets: ['es2015', 'stage-0']
      }
    },
      {test: /\.css$/, loader: "style-loader!css-loader"}]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      sourceMap: false,
      mangle: false
    })
  ]
};