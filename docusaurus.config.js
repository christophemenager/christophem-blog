module.exports = {
  title: 'Christophe Menager',
  tagline: 'Welcome to my personal blog',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'christophemenager', 
  projectName: 'christophem-blog', 
  themeConfig: {
    navbar: {
      title: "Christophe Menager",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/christophemenager',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
          blogTitle: 'My personal tech blog',
          blogDescription: 'A tech blog about react native, personal development, and many other things',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
