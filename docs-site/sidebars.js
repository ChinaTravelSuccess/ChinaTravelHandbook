// docs-site/sidebars.js

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Travel Guide',
      collapsed: false,
      items: [
        'visa',
        'payment',
        'transportation',
        'internet',
        'language',
        'culture',
        'safety',
      ],
    },
  ],
};