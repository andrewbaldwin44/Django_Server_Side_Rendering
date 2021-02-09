const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  context: __dirname,

  entry: "./presentation/src/index",

  output: {
    path: path.resolve("./dist"),
    filename: "[name]-[fullhash].js",
    publicPath: "http://localhost:4000/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({ filename: "./webpack-stats.json" })
  ],

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },

  mode: "development",

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"]
  }
};
