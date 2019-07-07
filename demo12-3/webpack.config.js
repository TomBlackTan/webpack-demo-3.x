var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './main.js',
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "commons",
  //     // (the commons chunk name)

  //     filename: "commons.js",
  //     // (the filename of the commons chunk)
  //   })
  // ]
}
