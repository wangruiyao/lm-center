module.exports = {
  presets: [
    '@vue/app', {
      useBuiltIns: 'entry'
    }
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ],
    ["@nutui/babel-plugin-separate-import", {
      "style": "css"
    }]
  ]
}
