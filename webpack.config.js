const glob = require("glob");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  // plugins: [
  //   ...glob.sync("./src/**.tsx").map((el) => {
  //     const name = path.parse(el).name;
  //     return new HtmlWebpackPlugin({
  //       filename: `${name}.html`,
  //     });
  //   }),
  // ],
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
