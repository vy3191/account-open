const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const  webpack  = require('webpack');


const webpackDevConfig = {
   entry: [
     '@babel/polyfill',
     'classlist-polyfill',
      path.resolve(__dirname, 'src/index.js')
    ],
   output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public' )
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
           loader: 'css-loader',
           options: { url: false }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
           loader: 'css-loader',
           options: { url: false }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src', 'utils')
    }
  },
  mode: 'development',
  devServer : {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index-template.html')
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'prop-types'
    }),
    new webpack.DefinePlugin({ DEBUG: true}),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'public/assets')
        }
      ]
    }),
  ]

};

module.exports = webpackDevConfig;