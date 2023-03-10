import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import path from 'path';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (config.resolve) {
    config.resolve.modules = [paths.src, 'node_modules'];
    config.resolve.extensions?.push('.ts', '.tsx', '.js');
  }

  if (config.module) {
    const rules = config.module.rules as RuleSetRule[];

    config.module.rules = rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));
  }

  if (config.plugins) {
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
      })
    );
  }

  return config;
};
