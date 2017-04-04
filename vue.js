const config = require('./index')

module.exports = {
  extends: [ 'vue' ].concat(config.extends),
  plugins: [ 'html' ],
  globals: config.globals,
  rules: config.rules
}
