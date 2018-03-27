const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const OfflinePlugin = require('offline-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    /* new OfflinePlugin({
      externals: ['index.html'],
      ServiceWorker: {
        minify: false,
      },
    }), */
  ],
};
