const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = [{
  input: 'app/_javascripts/application.js',
  output: {
    file: 'public/javascripts/application.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}, {
  input: 'node_modules/govuk-frontend/govuk/all.js',
  output: {
    file: 'public/javascripts/govuk-frontend.js'
  },
  input: 'node_modules/nhsuk-frontend/dist/nhsuk.js',
  output: {
    file: 'public/javascripts/nhsuk-frontend.js'
  },
  context: 'window'
}]
