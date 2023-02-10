const plugins = [];

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: plugins,
};
