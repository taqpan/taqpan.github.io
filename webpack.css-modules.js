const autoprefixer = require('autoprefixer');

module.exports = {
  cssModuleLoader: {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[local]__[hash:base64:5]',
      camelCase: 'dashes',
    },
  },
  postcssLoader: {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        autoprefixer({
          browsers: [
            '> 1%',
            'ie >= 11',
            'Firefox ESR',
            'Android >= 4',
            'last 5 versions',
          ]
        }),
      ],
    },
  },
};
