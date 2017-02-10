const resolve = require('path').resolve

module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'normalize.css',
    'highlight.js/styles/hybrid.css',
    { src: '~assets/sass/main.sass', lang: 'sass' }
  ],
  build: {
    extend(config) {
     config.resolve.alias['~documentation'] = resolve(__dirname, 'documentation')
     config.resolve.alias['~examples'] = resolve(__dirname, 'examples')
     config.resolve.alias['~utilities'] = resolve(__dirname, 'utilities')
    },
    loaders: [
     {
       test: /\.md/,
       loader: 'vue-markdown-loader'
     },
     {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 100000, // 100KO
        name: 'img/[name].[ext]?[hash]'
      }
     }
   ],
    vendor: [
       'marked',
       'highlight.js'
    ]
  },
  plugins: [
    '~plugins/marked'
  ],
  loading: { color: '#3B8070' }
}
