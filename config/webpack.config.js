const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// paths
const projectPath = path.resolve(__dirname, '..');
const buildPath = path.join(projectPath, 'public');
const srcPath = path.join(projectPath, 'src');
const appPath = path.join(srcPath, 'app');
const adminPath = path.join(srcPath, 'admin');
const mediaPath = path.join(projectPath, 'media');

const config = {
  entry: {
    'app': path.join(appPath, 'index.tsx'),
    'admin/admin': path.join(adminPath, 'index.tsx')
  },
  output: {
    path: buildPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: srcPath,
        loader: 'ts-loader'
      },
      {
        test: /(bulma|Draft)\.css$/,
        include: projectPath,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        include: projectPath,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,   // make sure sass-loader is used on imported assets
              localIdentName: '[local]---[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        include: projectPath,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']  // order is important. give typescript precedence when js file already exists.
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html'),
      chunks: ['app'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(adminPath, 'index.html'),
      chunks: ['admin/admin'],
      filename: 'admin/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(adminPath, 'config.yml'),
        to: 'admin/config.yml'
      },
      {
        from: mediaPath,
        to: path.join(buildPath, 'media')
      }
    ])
  ],
  devServer: {
    contentBase: buildPath
  },
  devtool: 'source-map',
  mode: 'development'
};

module.exports = config;