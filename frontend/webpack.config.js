
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
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    compress: true,
    port: 8080,
    headers: { 
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH,  DELETE",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  }
  }
  ,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader'
          , use: { loader: 'css-loader' }
        })
      },
      {
        test:  /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.png|.svg*.*$/,
        loader: 'file-loader'
      }
    ]
  }

}