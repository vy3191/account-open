const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { webpack } = require('webpack');


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
  modules: {
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
      pages: path.resolve(__dirname, 'src/pages')
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
    new webpack.HotModuleReplacePlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'prop-types'
    })
  ]

};

module.exports = webpackDevConfig;