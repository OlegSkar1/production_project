import { RuleSetRule } from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';

import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const esBuildLoader = {
    test: /\.[jt]sx?$/,
    loader: 'esbuild-loader',
    options: {
      target: 'es2015',
      jsx: 'automatic',
    },
  };

  const scssLoader = buildCssLoader(isDev);

  const fontLoader = {
    test: /\.(woff(2)?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name][ext]',
    },
  };

  const imgLoader = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/img/[name].[contenthash:8][ext]',
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  return [esBuildLoader, scssLoader, fontLoader, svgLoader, imgLoader];
}
