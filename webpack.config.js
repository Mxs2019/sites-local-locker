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
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader",
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                //  console.log({ url, resourcePath }) example:
                // {
                //  url: 'index.js.map',
                //  resourcePath: '/repos/xlib-wsl/common/temp/node_modules/.pnpm/https-proxy-agent@5.0.0/node_modules/https-proxy-agent/dist/index.js'
                // }

                if (/.*\/node_modules\/.*/.test(resourcePath)) {
                  return false;
                }
                return true;
              },
            },
          },
        ],
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
