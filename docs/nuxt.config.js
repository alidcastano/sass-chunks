module.exports = {
  head: {
    title: 'docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: ['~assets/main.css'],
  build: {
    loaders: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000, // 100KO
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
    ]
  }
}
