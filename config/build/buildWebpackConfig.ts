import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';

import { buildDevserver } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolver } from './buildResolver';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      assetModuleFilename: 'assets/[contenthash].[ext]',
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(options),
    plugins: isDev
      ? [...buildPlugins(options), new ReactRefreshWebpackPlugin({ overlay: false })].filter(Boolean)
      : buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevserver(options) : undefined,
    cache: false,
  };
}
