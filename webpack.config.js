const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = process.env.NODE_ENV === 'development';

// Check if module is a vendor module.
const isVendor = ({ userRequest }) => (
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.match(/\.js$/)
);

const config = {
  // Include source map in development.
  devtool: debug ? 'inline-source-map' : 'hidden-source-map',

  entry: {
    app: [path.resolve(__dirname, 'src/client.jsx')],
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'public/js/[name].[hash].js',
    publicPath: '/',
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
    new ExtractTextPlugin({ filename: 'public/css/style.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // Separate all vendor files into separate bundle.
      minChunks: isVendor,
    }),
    // Inject built bundles into html file.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
  ],
};

if (debug) {
  config.entry.app.unshift(
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
