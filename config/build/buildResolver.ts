import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolver({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
    mainFiles: ['index'],
  };
}
