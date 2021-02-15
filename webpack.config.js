const path = require('path');

module.exports = {
  entry: './client/components/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  }
}