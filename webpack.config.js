const path = require('path');

module.exports = {
  entry: './lib/feedback.ts',
  output: {
    filename: 'feedback.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
