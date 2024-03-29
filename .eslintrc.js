module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:i18next/recommended',
    'prettier',
  ],
  ignorePatterns: ['/scripts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'i18next',
    'prettier',
    'olegskar-fsd-checker',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'olegskar-fsd-checker/paths-checker': ['error', { alias: '@' }],
    'olegskar-fsd-checker/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.ts', '**/*.stories.tsx', '**/StoreDecorator.tsx'],
      },
    ],
    'olegskar-fsd-checker/layer-imports': [
      'error',
      { alias: '@', ignoreImportPatterns: ['**/StoreProvider', '**/ThemeProvider', '**/router/**', '**/testing'] },
    ],
    'i18next/no-literal-string': [
      2,
      {
        markupOnly: true,
        ignoreAttribute: [
          'src',
          'alt',
          'refName',
          'as',
          'to',
          'data-testid',
          'variant',
          'size',
          'theme',
          'align',
          'title',
          'feedbackTitle',
          'text',
          'target',
          'direction',
          'justify',
          'align',
          'gap',
          'tagname',
          'name',
          'color',
          'weight',
          'border',
          'labelDirection',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/prop-types': 0,
    'prettier/prettier': 2,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**.module.*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'react/display-name': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
