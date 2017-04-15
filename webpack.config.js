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

// Common configuration.
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
    }],
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // Separate all vendor files into separate bundle.
      minChunks: isVendor,
    }),
    // Inject built bundles into html file.
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
    }),
  ],
};

if (debug) {
  // Development-specific configuration.
  config.entry.app.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  );
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  // Load CSS modules normally to allow HMR.
  config.module.rules.push({
    test: /\.s?css$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      },
    }, {
      loader: 'resolve-url-loader',
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    }],
  });
} else {
  // Production-specific configuration.
  config.plugins.push(
    new ExtractTextPlugin({ filename: 'public/css/style.css', allChunks: true })
  );
  // Extract styles into real CSS.
  config.module.rules.push({
    test: /\.s?css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }, {
        loader: 'resolve-url-loader',
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    }),
  });
}

module.exports = config;
