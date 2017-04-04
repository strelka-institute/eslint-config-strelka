module.exports = {
  extends: [ 'standard' ],
  globals: { fetch: true },
  rules: {
    'no-magic-numbers': [
      1,
      {
        'ignore': [ -1, 0, 1, 2 ],
        'ignoreArrayIndexes': true,
        'detectObjects': true
      }
    ],
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
    'no-shadow': 2,
    'array-bracket-spacing': [ 2, 'always' ],
    'object-curly-spacing': [ 2, 'always' ]
  }
}
