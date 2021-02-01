const env = process.env.NODE_ENV

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': env === 'production' ? 'error' : 'off',
    'no-debugger': env === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-extra-semi': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
  },
}
