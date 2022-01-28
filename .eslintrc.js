module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint-disable-next-line prettier/prettier': 'on',
    // '@typescript-eslint/member-delimiter-style': 0,
    // '@typescript-eslint/no-use-before-define': 0,
    // 'react/prop-types': 0,
  },
};
