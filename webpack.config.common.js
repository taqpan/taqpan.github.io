const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/Index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'babel-loader'},
        ],
      },
      {
          test: /\.svg$/,
          use: {
              loader: 'svg-url-loader'
          }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'resources', to: '.' }
    ]),
  ],
  performance: {
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1024 * 1024
  }
};
