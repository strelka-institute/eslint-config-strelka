module.exports = {
  extends: [ 'standard' ],
  globals: { fetch: true },
  rules: {
    'no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true
      }
    ],
    'prefer-promise-reject-errors': 0,
    'prefer-const': [ 2, { destructuring: 'all' } ],
    'no-shadow': 2,
    'array-bracket-spacing': [ 2, 'always' ],
    'object-curly-spacing': [ 2, 'always' ]
  }
}
