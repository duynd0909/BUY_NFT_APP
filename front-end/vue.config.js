const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      }),
      new ESLintPlugin()
    ]
  }
};
