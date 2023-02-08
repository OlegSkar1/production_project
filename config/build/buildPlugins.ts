import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
