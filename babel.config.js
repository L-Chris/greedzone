module.exports = {
  sourceType: 'unambiguous',
  plugins: ['array-includes', ['transform-imports', {
    "vuetify": {
      "transform": "vuetify/es5/components/${member}",
      "preventFullImport": true
    }
  }]],
  presets: [
    '@vue/app'
  ]
}
