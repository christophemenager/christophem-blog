module.exports = {
  title: 'Christophe Menager',
  tagline: 'Welcome to my personal blog',
  url: 'https://chrichri.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/images/logo.png',
  organizationName: 'christophemenager',
  projectName: 'christophem-blog',
  themeConfig: {
    navbar: {
      title: 'Christophe Menager',
      logo: {
        alt: 'My Site Logo',
        src: 'assets/images/logo.png',
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
          blogTitle: 'My blog, written in french, translated in english',
          blogDescription: 'A blog to talk about tech, personal development, and many other things',
          feedOptions: {
            type: 'all',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
