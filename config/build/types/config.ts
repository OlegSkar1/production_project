export type BuildMode = 'production' | 'development';
export type ProjectMode = 'frontend' | 'storybook' | 'jest';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: ProjectMode;
}
