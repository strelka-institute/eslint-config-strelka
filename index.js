module.exports = {
  extends: [ 'standard' ],
  globals: { fetch: true },
  rules: {
    'sort-imports': [
      1,
      {
        'ignoreCase': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': [ 'none', 'all', 'multiple', 'single' ]
      }
    ],
    'no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true
      }
    ],
    'prefer-promise-reject-errors': 1,
    'no-shadow': 2,
    'array-bracket-spacing': [ 2, 'always' ],
    'object-curly-spacing': [ 2, 'always' ]
  }
}
