const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: {
      index: 'index.html'
    },
    port: '3000'
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      },
      {
        test: /\.tsx?$/,
        loaders: 'ts-loader'
      },
      {
        test: /\.css$/,
        loaders: ['css-loader'],
      },
      {
        test: /\.png$/,
        loaders: 'url-loader'
      },
    ]
  }
};
