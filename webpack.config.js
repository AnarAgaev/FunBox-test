const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      isProd ? 'css-loader' :  {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
      isProd ? {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './postcss.config.js'
            }
          }
        } : {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')()
            ]
          }
        },
      'sass-loader'
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ];

    // If the production mode, we extract the styles into a separate file
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'style-[hash:8].css'
        })
      )
    }

    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',

    output: {
      filename: isProd ? "[name]-[hash:10].js" : undefined
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },

    module: {
      rules: [
        // Loading JS
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        // Loading styles
        {
          test: /\.s[ac]ss$/i,
          use: getStyleLoaders()
        },

        // Loading images
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        }
      ]
    },

    plugins: getPlugins(),

    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true,
      open: true
    }
  };
};