const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  name: 'contracts',
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: ['react-hot-loader/patch', path.resolve(__dirname, '../index.tsx')],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
    // Relative url modules import from js folder and node_modules folder
    modules: [path.resolve(__dirname, '../'), path.join(path.resolve(__dirname, '../'), 'node_modules')]
  },
  devServer: {
    port: 7000,
    compress: true,
    // open browser when server starts
    open: true,
    // don't refresh if hot loading fails
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            plugins: [
              ['relay', { artifactDirectory: './__generated__' }],
              // plugin-proposal-decorators is only needed if we're using experimental decorators in TypeScript
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-object-rest-spread',
              ['babel-plugin-styled-components', { displayName: true }],
              'react-hot-loader/babel'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: '**/*.{ts,tsx,js,jsx}',
        options: { fix: true }
      }
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../template.html') }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
