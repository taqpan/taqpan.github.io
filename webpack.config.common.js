const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
    }),
  ],
};
