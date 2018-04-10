
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCss = new ExtractTextPlugin("app.css");
module.exports = {
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }), extractCss
    ],
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'    
  },
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    compress: true,
    port: 8080
  }
  ,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCss.extract({fallback : 'style-loader'
        , use: { loader : 'css-loader' }})
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
       {
          test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
          loader: 'file'
          }
    ]
  }
  
}