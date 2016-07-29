module.exports = {
  parser: 'babel-eslint',
  extends: [ 'standard', 'standard-jsx' ],
  plugins: [ 'meteor', 'output-todo-comments' ],
  globals: { fetch: true },
  rules: {
    'space-before-function-paren': [ 2, 'never' ],
    'generator-star-spacing': 0,
    'comma-dangle': [ 2, 'always-multiline' ],
    'no-unused-vars': [
      2,
      {
        'varsIgnorePattern': '^__',
        'vars': 'all',
        'args': 'none',
      },
    ],
    'no-multiple-empty-lines': [ 'error', { 'max': 2 } ],
    'output-todo-comments/output-todo-comments': 1,
  }
}
