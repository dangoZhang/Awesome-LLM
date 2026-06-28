import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Awesome-LLM Wiki',
  description: '近五年 LLM 技术地图：训练、数据、评测、Infra、Agent',
  base: '/Awesome-LLM/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    logo: '/llm-stack.svg',
    siteTitle: 'Awesome-LLM Wiki',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '时间线', link: '/milestones' },
      { text: '找工地图', link: '/roadmap' },
      { text: '来源', link: '/sources' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: 'Awesome-LLM Wiki', link: '/' },
          { text: '五年时间线', link: '/milestones' },
          { text: '找工地图', link: '/roadmap' },
          { text: '术语表', link: '/glossary' }
        ]
      },
      {
        text: '五大方向',
        items: [
          { text: '训练', link: '/training/' },
          { text: '数据', link: '/data/' },
          { text: '评测', link: '/evaluation/' },
          { text: 'Infra', link: '/infra/' },
          { text: 'Agent', link: '/agents/' }
        ]
      },
      {
        text: '资料',
        items: [
          { text: '技术报告索引', link: '/sources' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dangoZhang/Awesome-LLM' }
    ],
    footer: {
      message: 'Technical-report-first LLM wiki. Last audited on 2026-06-28.',
      copyright: 'MIT'
    },
    outline: {
      level: [2, 3]
    },
    editLink: {
      pattern: 'https://github.com/dangoZhang/Awesome-LLM/edit/main/docs/:path',
      text: '编辑本页'
    }
  }
})
