const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    entry: "./src/entry.js",
    store: "./src/store.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "amd",
    library: "reactApp"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader"
          }
        }
      },
      {
        test: /\.js/,
        use: ["babel-loader?cacheDirectory"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[ext]?[hash]",
              publicPath: "/app2/"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],

  mode: "development",

  devtool: "eval-source-map"
  // devtool: 'none',
};
