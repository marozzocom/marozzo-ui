const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpack = require("webpack")

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "ts-loader".
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.prod.json"
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      generateStatsFile: true,
      reportFilename: `${path.join(__dirname, "reports")}/report.html`
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
})
