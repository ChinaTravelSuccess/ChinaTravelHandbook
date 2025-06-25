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

  url: "https://china-travel-handbook.netlify.app",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "KatyTao", // Usually your GitHub org/user name.
  projectName: "China-travel-handbook", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
            return `https://github.com/KatyTao/China-travel-handbook/edit/main/docs-site/docs/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
        },
        items: [
          { 
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Travel Guide",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/KatyTao/China-travel-handbook",
            label: "GitHub",
            position: "right",
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
                href: "https://github.com/KatyTao/China-travel-handbook/discussions",
              },
              {
                label: "Issues",
                href: "https://github.com/KatyTao/China-travel-handbook/issues",
              },
              {
                label: "Contributing",
                href: "https://github.com/KatyTao/China-travel-handbook/blob/main/CONTRIBUTING.md",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/KatyTao/China-travel-handbook",
              },
              {
                label: "Netlify",
                href: "https://china-travel-handbook.netlify.app",
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
            "China travel guide, China visa, WeChat Pay, Alipay, China transportation, foreign tourists, open source travel guide, China tourism",
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
      ],
    }),
};

export default config;
