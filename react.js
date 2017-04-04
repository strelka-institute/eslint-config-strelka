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
        'shorthandLast': true,
        'callbacksLast': true
      }
    ],
    'react/jsx-key': 1
  })
}
