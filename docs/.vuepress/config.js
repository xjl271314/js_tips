const moment = require('moment');

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
  plugins: [
    require('./plugins/copy/index.js'),
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    ['@vuepress/last-updated',{
      transformer: (timestamp, lang) => {
        moment.locale(lang)
        return moment(timestamp).format('YYYY-MM-DD HH:mm:SS')
      }
    }],
    ['@vuepress/register-components'],
  ],
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
    ],
    lastUpdated: '上次更新时间' ,
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'https://github.com/xjl271314/js-tips',
    // 如果你的文档不在仓库的根部
    // docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: false,
    smoothScroll: true
  }
}

