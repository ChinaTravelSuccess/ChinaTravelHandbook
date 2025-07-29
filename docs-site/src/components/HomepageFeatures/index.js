import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const WhatYouLearnList = [
  {
    icon: '📋',
    title: 'Before You Go',
    items: [
      { title: 'Visa Applications', description: 'Complete guide for all countries', link: '/docs/en/visa' },
    ]
  },
  {
    icon: '💳',
    title: 'Money & Payments', 
    items: [
      { title: 'Mobile Payments', description: 'WeChat Pay & Alipay setup', link: '/docs/en/payment' },
    ]
  },
  {
    icon: '🚄',
    title: 'Getting Around',
    items: [
      { title: 'Transportation', description: 'Trains, metros, taxis, and ride-sharing', link: '/docs/en/transportation' },
    ]
  },
  {
    icon: '🌐',
    title: 'Staying Connected',
    items: [
      { title: 'Internet Access', description: 'VPNs, SIM cards, and WiFi', link: '/docs/en/internet' },
    ]
  },
  {
    icon: '💬',
    title: 'Communication',
    items: [
      { title: 'Language Guide', description: 'Survival phrases and translation tools', link: '/docs/en/language' },
    ]
  },
  {
    icon: '🏨',
    title: 'Places to Stay',
    items: [
      { title: 'Accommodation', description: 'Hotels, hostels, and booking tips', link: '/docs/en/accommodation' },
    ]
  },
  {
    icon: '🍜',
    title: 'Food & Dining',
    items: [
      { title: 'Ordering & Takeaway', description: 'How to order food and use delivery apps', link: '/docs/en/food/order-and-takeaway' },
      { title: 'Cuisine & Dining', description: 'Chinese food culture and dining etiquette', link: '/docs/en/food/cuisine' },
    ]
  },
  {
    icon: '🎭',
    title: 'Attractions & Culture',
    items: [
      { title: 'Attractions & Tickets', description: 'Top destinations and booking tickets', link: '/docs/en/attractions' },
    ]
  },
  {
    icon: '🏙️',
    title: 'Trending Cities',
    items: [
      { title: 'Shanghai', description: 'Complete guide to China\'s financial capital', link: '/docs/en/cities/shanghai' },
    ]
  },
  {
    icon: '🛡️',
    title: 'Safety & Health',
    items: [
      { title: 'Safety Guidelines', description: 'Staying safe and aware', link: '/docs/en/safety' },
    ]
  }
];

const FeatureList = [
  {
    title: 'Everything You Need',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        From visa applications to mobile payments, transportation to cultural etiquette - 
        we cover every aspect of traveling in China with practical, up-to-date information.
      </>
    ),
  },
  {
    title: 'Real Traveler Insights',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Written by travelers, for travelers. Our guides are based on real experiences 
        and updated regularly to reflect the latest changes in China's travel landscape.
      </>
    ),
  },
  {
    title: 'Always Free & Updated',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Open source and community-driven. Our guides are completely free and 
        continuously updated by contributors who know China inside and out.
      </>
    ),
  },
];

function WhatYouLearnSection({icon, title, items}) {
  return (
    <div className="margin-bottom--lg">
      <h3 style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{icon}</span>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <Link to={item.link} className="text-decoration-none">
              <strong style={{ color: 'var(--ifm-color-primary)' }}>{item.title}</strong>
            </Link>
            {' - ' + item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* What You'll Learn Section */}
      <section className="padding-vert--xl">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', fontSize: '2.25rem' }}>
                <span style={{ fontSize: '2rem', marginRight: '0.75rem' }}>📋</span>
                What You'll Learn
              </h2>
              <div className="row">
                {WhatYouLearnList.map((section, idx) => (
                  <div key={idx} className="col col--4 margin-bottom--lg">
                    <WhatYouLearnSection {...section} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 