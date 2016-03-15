var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/app/app.js",
  },
  output: {
    path: "./dist/assets/app/js",
    filename: "[name].min.js",
    publicPath: "/assets/app/js/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css!sass!sourceMap"
      },
      {
        test: /\.(png|jpg|gif)/,
        loader: "file?name=../images/[name].[ext]"
      }
    ]
  }
}
