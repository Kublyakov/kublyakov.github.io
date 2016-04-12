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
    }]
  }
};