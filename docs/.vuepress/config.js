module.exports = {
  title: 'JavaScript Tools',
  description: '常用的js方法工具',
  dest: './dist',
  base: '/js_tips/',
  repo: '',
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: '常用的js方法，js_tricks' }],
    ['meta', { itemprop: 'name', content: 'js_trick' }],
    ['meta', { itemprop: 'image', content: '/js_tricks/images/favicon.png' }],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-include'), './')
    }
  },
  themeConfig: {
    nav: [
      { text: 'css tricks', link: '' },
      { text: 'blog', link: 'https://xjl271314.github.io/docs' },
      { text: 'GitHub', link: 'https://github.com/xjl271314/js-tips' },
    ],
    sidebar: [
      '/dom/',
      '/bom/',
      '/type/',
      '/array/',
      '/string/',
      '/object/',
      '/function/',
      '/date/',
      '/number/',
      '/cookie/',
      '/copy/',
      '/script/',
      '/styles/',
      '/file/',
      '/other/'
    ]
  }
}

