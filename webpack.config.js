const path = require("path");

config = {
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
  
};

module.exports =[
  {
    ...config,
    output: {
      path: path.resolve(__dirname, "./.artifact-output/desktop"),
      filename: "bundle.js",
    },
  },{
    ...config,
    output: {
      path: path.resolve(__dirname, "./desktop"),
      filename: "bundle.js",
    },
  }
]
