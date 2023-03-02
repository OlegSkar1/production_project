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
  config.resolve.modules = [paths.src, 'node_modules'];
  config.resolve.extensions.push('.ts', '.tsx', '.js');

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
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

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: '',
    })
  );
  return config;
};
