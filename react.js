const config = require('./index')

module.exports = {
  extends: config.extends.concat([ 'standard-jsx' ]),
  globals: config.globals,
  rules: Object.assign({}, config.rules, {
    'react/react-in-jsx-scope': 2,
    'react/jsx-handler-names': 1,
    'react/jsx-sort-props': [
      1,
      {
        shorthandLast: true,
        callbacksLast: true,
        noSortAlphabetically: true,
        reservedFirst: [ 'key', 'ref' ]
      }
    ],
    'react/jsx-key': 1,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-closing-tag-location': 2,
    'react/no-deprecated': 1,
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowBind: false
      }
    ]
  })
}
