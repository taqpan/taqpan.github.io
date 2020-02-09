const autoprefixer = require('autoprefixer');

module.exports = {
  cssModuleLoader: {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]__[hash:base64:5]',
      },
      localsConvention: 'dashes',
    },
  },
  postcssLoader: {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        autoprefixer(),
      ],
    },
  },
};
