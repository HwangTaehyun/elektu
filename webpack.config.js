const path = require('path');

module.exports = {
  entry: './elektu.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'elektu.bundle.js',
  },
};
