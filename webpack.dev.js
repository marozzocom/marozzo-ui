const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")

module.exports = merge.smart(common, {
  mode: "development",
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      {
        test: /\.tsx?$/,
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ]
})
