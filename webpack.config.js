const glob = require("glob");

const path = require("path");

config = {
  // 1
  entry: glob.sync("./src/**.tsx").reduce(function (obj, el) {
    const name = path.parse(el).name;
    console.log(`Building: ${el}`);
    obj[name] = el;
    return obj;
  }, {}),

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
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx"],
  },
  // 2
};

module.exports = [
  {
    ...config,
    output: {
      path: path.resolve(__dirname, "./.artifact-output/desktop"),
      filename: "[name].bundle.js",
    },
  },
  {
    ...config,
    output: {
      path: path.resolve(__dirname, "./desktop"),
      filename: "[name].bundle.js",
    },
  },
];
