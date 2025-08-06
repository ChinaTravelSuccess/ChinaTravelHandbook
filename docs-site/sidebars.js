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
      type: "doc",
      id: "en/introduction",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "en/visa",
      label: "Visa",
    },
    {
      type: "doc",
      id: "en/payment",
      label: "Payment",
    },
    {
      type: "doc",
      id: "en/internet",
      label: "Internet",
    },
    {
      type: "doc",
      id: "en/transportation",
      label: "Transportation",
    },
    {
      type: "doc",
      id: "en/accommodation",
      label: "Accommodation",
    },
    {
      type: "category",
      label: "Food & Dining",
      items: [
        {
          type: "doc",
          id: "en/food/order-and-takeaway",
          label: "Ordering & Takeaway",
        },
        {
          type: "doc",
          id: "en/food/cuisine",
          label: "Cuisine & Dining",
        },
      ]
    },
    {
      type: "doc",
      id: "en/language",
      label: "Language & Culture",
    },
    {
      type: "doc",
      id: "en/attractions",
      label: "Attractions & Tickets",
    },
    {
      type: "doc",
      id: "en/safety",
      label: "Safety & Health",
    },
    // {
    //   type: "category",
    //   label: "Trending Cities",
    //   items: [
    //     {
    //       type: "doc",
    //       id: "en/cities/shanghai",
    //       label: "Shanghai",
    //     },
    //   ]
    // }
  ],

  // Sidebar for Chinese docs
  tutorialSidebarZh: [
    {
      type: "doc",
      id: "zh-CN/introduction",
      label: "介绍",
    },
  ],
};

module.exports = sidebars;
