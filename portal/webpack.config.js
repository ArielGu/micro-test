const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // context: path.resolve(__dirname, "src"),
  entry: {
    main: "src/portal.js"
  },
  mode: "development",
  output: {
    publicPath: "",
    filename: "[name].js",
    path: path.resolve(__dirname, "release")
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "src/index.html") },
      { from: path.resolve(__dirname, "src/style.css") },
      { from: path.resolve(__dirname, "libs/system.js") }
    ]),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: "./release",
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      "/app1": {
        target: "http://localhost:9001",
        pathRewrite: { "^/app1": "" }
      },
      "/app2": {
        target: "http://localhost:9002",
        pathRewrite: { "^/app2": "" }
      }
    }
  }
};
