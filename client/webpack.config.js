const path = require('path');

console.log(path.resolve(__dirname, 'src/index.jsx'));

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/,

          use: {
            loader: 'babel-loader',
          
          }
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
    ]
  }
};
