const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // Include source map in development.
  devtool: (process.env.NODE_ENV === 'development' ?
            'inline-source-map' : 'hidden-source-map'),

  entry: path.resolve(__dirname, 'src/client.jsx'),

  output: {
    path: path.resolve(__dirname, 'dist/public/'),
    filename: 'js/bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      include: /src/,
      loader: 'babel-loader',
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      }),
    }],
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'css/style.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
  ],
};

const serverConfig = {
  entry: path.resolve(__dirname, 'src/server.js'),
  target: 'node',
  externals: [nodeExternals()],

  node: {
    __dirname: false,
    __filename: false,
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'server.bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.s?css$/,
      include: /src/,
      loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader',
    }],
  },
};

// Exclude server build in development.
module.exports = (process.env.NODE_ENV === 'development'
    ? config
    : [config, serverConfig]);
