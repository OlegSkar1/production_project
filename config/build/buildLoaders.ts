import { RuleSetRule } from 'webpack';

import removeJSXIdentifierPlugin from '../babel/removeJSXIdentifierPlugin';

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
    exclude: /node_modules/,
  };

  const babelLoader: RuleSetRule = {
    test: /\.[jt]sx$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        !isDev && [
          removeJSXIdentifierPlugin,
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
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

  return [esBuildLoader, babelLoader, scssLoader, fontLoader, svgLoader, imgLoader];
}
