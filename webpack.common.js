const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "src/index.ts"),
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "ts-loader".
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
