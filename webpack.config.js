const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "cinema-app-bundle.js"
  },
  devServer: {
    historyApiFallback: true
  },
  module:{
      rules:[
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader:"babel-loader"
              },
          },
          {
              test: /\.css$/,
              use: ["style-loader","css-loader"]
          },
          {
            test: /\.(png|jpg)$/,
            loader: 'url-loader'
          }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          template: "./src/index.html"
      })
  ]
  
};