const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// checks if it is script prod or dev
// looks for the corresponding env file
// return environment variables
const checkEnv = require('./checkEnv.setup');

const HtmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: './index.html',
});

// the env object is the one pass in the command script
module.exports = env => {
  const envKeys = checkEnv(env); // corresponding env variables
  const EnvironmentPlugin = new webpack.DefinePlugin(envKeys); // set enviromental variables in the compile time

  return {
    entry: './client/index.js', //default value
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'resolve-url-loader' ,'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
              }
            },
          ],
        },
        {
          test: require.resolve('webrtc-adapter'),
          use: 'expose-loader'
        },
        
       
      ],
    },
    plugins: [HtmlPlugin, EnvironmentPlugin],
    devServer: {
      compress: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  };
};
