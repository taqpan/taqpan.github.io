const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const {cssModuleLoader, postcssLoader} = require('./webpack.css-modules');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build')
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3000,
    contentBase: path.join(__dirname, 'template'),
    watchContentBase: true,
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          cssModuleLoader,
          postcssLoader,
          'sass-loader',
        ],
      },
    ],
  },
});
