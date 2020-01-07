module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry'
      }
    ]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      },
      // {
      //   "libraryName": "element-ui",
      //   "styleLibraryName": "theme-chalk"
      // }
    ]
  ]
}
