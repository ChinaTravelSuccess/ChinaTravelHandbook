/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a "Next" and "Previous" navigation
 - create a category with a generated index page

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar for English docs
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'en/introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Before You Go',
      items: [
        'en/visa',
      ],
    },
    {
      type: 'category',
      label: 'Money & Payments',
      items: [
        'en/payment',
      ],
    },
    {
      type: 'category',
      label: 'Getting Around',
      items: [
        'en/transportation',
      ],
    },
    {
      type: 'category',
      label: 'Staying Connected',
      items: [
        'en/internet',
      ],
    },
    {
      type: 'category',
      label: 'Communication',
      items: [
        'en/language',
        'en/culture',
      ],
    },
    {
      type: 'category',
      label: 'Food & Dining',
      items: [
        'en/food',
      ],
    },
    {
      type: 'category',
      label: 'Safety & Health',
      items: [
        'en/safety',
      ],
    },
  ],

  // Sidebar for Chinese docs
  tutorialSidebarZh: [
    {
      type: 'doc',
      id: 'zh-CN/introduction',
      label: '介绍',
    },
  ],
};

module.exports = sidebars;