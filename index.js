/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:deprecation/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-natural',
    'plugin:unicorn/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    project: true,
  },
  plugins: [
    '@stylistic',
    'only-error',
    'prefer-arrow-functions',
    'unused-imports',
  ],
  rules: {
    '@stylistic/jsx-curly-brace-presence': 'error',
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: ['block-like', 'export', 'return'],
        prev: '*',
      },
      { blankLine: 'always', next: ['*'], prev: ['block-like'] },
      {
        blankLine: 'always',
        next: ['expression'],
        prev: ['block-like', 'const'],
      },
      { blankLine: 'never', next: ['const'], prev: ['const'] },
    ],
    '@stylistic/spaced-comment': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-destructuring': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true,
        allowNullableNumber: true,
        allowNullableString: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-namespace': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-console': 'error',
    'no-constant-binary-expression': 'error',
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-rename': 'error',
    'no-warning-comments': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      { returnStyle: 'implicit' },
    ],
    'prefer-template': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-handler-names': 'error',
    'react/no-unknown-property': ['error', { ignore: ['tw'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    yoda: 'error',
  },
};
