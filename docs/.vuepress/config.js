module.exports = {
    title: 'Dev Guide MiPe',
    description: 'Dev Guide MiPe',
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2, 3] },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            // md.use(require('markdown-it-xxx'))
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Coding Standards v5', link: '/codingStandard/' },
            { text: 'Components', link: '/components/' },
            { text: '3rd Party', link: '/3rdParty/' },
            { text: 'Dev Tools', link: '/DevTools/' },
        ],
        sidebar: 'off'
    },
    plugins: ['@vuepress/last-updated']
}