const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV === 'development';

const config = {
  // Include source map in development.
  devtool: debug ? 'inline-source-map' : 'hidden-source-map',

  entry: [
    path.resolve(__dirname, 'src/client.jsx'),
  ],

  output: {
    path: path.resolve(__dirname, 'dist/public/'),
    filename: 'js/bundle.js',
    publicPath: '/public/',
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

if (debug) {
  config.entry.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  );
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}

module.exports = config;
