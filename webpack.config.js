const path = require("path");

module.exports = {
  // 1
  entry: path.resolve(__dirname, "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx"],
  },
  // 2
  output: {
    path: path.resolve(__dirname, "./.artifact-output/desktop"),
    filename: "bundle.js",
  },
};
