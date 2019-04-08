const path = require('path');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: 'warning'
  },
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([{ from: path.resolve('./public/images'), to: './images' }])
  ]
});
