const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
    // modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "ts-loader".
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.md$/i,
        use: "raw-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Marozzo UI",
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
}
