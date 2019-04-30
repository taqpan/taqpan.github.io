const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const {cssModuleLoader, postcssLoader} = require('./webpack.css-modules');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          cssModuleLoader,
          postcssLoader,
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].css"}),
  ],
});
