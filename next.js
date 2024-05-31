/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './index',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/jsx-boolean-value': 'error',
    'react/jsx-handler-names': 'error',
    'react/no-unknown-property': ['error', { ignore: ['tw'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
  },
};
