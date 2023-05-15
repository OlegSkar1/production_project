import path from 'path';

import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

const getApiUrl = (mode: BuildMode, apiUrl?: string) => {
  if (apiUrl) return apiUrl;

  if (mode === 'production') {
    return '/api';
  }

  return 'http://localhost:8000';
};

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.join(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env?.mode || 'development';

  const analyze = env?.analyze || false;

  const isDev = mode === 'development';

  const PORT = env?.port || 3000;

  const apiUrl = getApiUrl(mode, env?.apiUrl);

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    analyze,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
