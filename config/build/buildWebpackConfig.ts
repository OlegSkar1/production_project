import { EsbuildPlugin } from 'esbuild-loader';
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
      publicPath: '/',
    },
    optimization: {
      minimizer: [
        new EsbuildPlugin({
          target: 'es2015',
          css: true,
        }),
      ],
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevserver(options) : undefined,
  };
}
