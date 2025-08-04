// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "China Travel Handbook",
  tagline: "Navigate China with confidence - from visa to mobile payments, we've got you covered",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://chinatravelsuccess.org",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "China Travel Success", // Usually your GitHub org/user name.
  projectName: "China-travel-handbook", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // SEO optimizations
  noIndex: false, // Allow indexing
  trailingSlash: false, // Consistent URL structure

  // Internationalization configuration
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      "zh-CN": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-CN",
        calendar: "gregory",
        path: "zh-CN",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) => {
            return `https://github.com/ChinaTravelSuccess/ChinaTravelHandbook/edit/main/docs-site/docs/${docPath}`;
          },
          // SEO optimizations for docs
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-HKYRNS51VE',
          anonymizeIP: true,
        },
        // Enable pages for custom homepage redirection
        pages: {
          path: "src/pages",
          routeBasePath: "/",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "China Travel Handbook",
        logo: {
          alt: "China Travel Handbook Logo",
          src: "img/logo.svg",
          href: "/docs/en/introduction",
        },
        items: [
          { 
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Guide",
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            href: "https://github.com/ChinaTravelSuccess/ChinaTravelHandbook",
            label: "GitHub",
            position: "right",
          },
          {
            label: '📧 Email Us',
            href: 'mailto:feedback@chinatravelsuccess.com?subject=China%20Travel%20Handbook%20Feedback&body=Hi!%0A%0APage:%20' + encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '') + '%0A%0AFeedback:%0A',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Travel Guide",
            items: [
              {
                label: "Getting Started",
                to: "/docs/en/introduction",
              },
              {
                label: "Visa Guide",
                to: "/docs/en/visa",
              },
              {
                label: "Payment Methods",
                to: "/docs/en/payment",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/ChinaTravelSuccess/ChinaTravelHandbook/discussions",
              },
              {
                label: "Issues",
                href: "https://github.com/ChinaTravelSuccess/ChinaTravelHandbook/issues",
              },
              {
                label: "Contributing",
                href: "https://github.com/ChinaTravelSuccess/ChinaTravelHandbook/blob/main/CONTRIBUTING.md",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ChinaTravelSuccess/ChinaTravelHandbook",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} China Travel Handbook Contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "China travel guide, China visa, WeChat Pay, Alipay, China transportation, foreign tourists, open source travel guide, China tourism, travel to China 2025, China travel tips, first time China",
        },
        {
          name: "description",
          content:
            "Your complete China travel guide - navigate China with confidence from visa applications to mobile payments. Community-driven, always free.",
        },
        {
          name: "author",
          content: "China Travel Handbook Community",
        },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "googlebot",
          content: "index, follow",
        },
        // Open Graph tags
        {
          property: "og:title",
          content: "China Travel Handbook - Your Complete Travel Guide",
        },
        {
          property: "og:description",
          content: "Navigate China with confidence - from visa to mobile payments, we've got you covered",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://china-travel-handbook.netlify.app",
        },
        {
          property: "og:image",
          content: "https://china-travel-handbook.netlify.app/img/docusaurus-social-card.jpg",
        },
        {
          property: "og:site_name",
          content: "China Travel Handbook",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        // Twitter Card tags
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "China Travel Handbook - Your Complete Travel Guide",
        },
        {
          name: "twitter:description",
          content: "Navigate China with confidence - from visa to mobile payments, we've got you covered",
        },
        {
          name: "twitter:image",
          content: "https://china-travel-handbook.netlify.app/img/docusaurus-social-card.jpg",
        },
        // Additional SEO tags
        {
          name: "theme-color",
          content: "#2e8555",
        },
        {
          name: "msapplication-TileColor",
          content: "#2e8555",
        },
      ],
    }),
};

export default config;
