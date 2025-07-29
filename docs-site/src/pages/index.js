import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import StructuredData from '@site/src/components/StructuredData';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__description">
          Your comprehensive, community-driven guide to traveling in China. 
          From visa applications to mobile payments, transportation to dining - 
          we've got everything you need for a successful trip to China.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/en/introduction">
            Start Your China Journey - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/en/visa">
            Get China Visa Guide 📋
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="China Travel Guide 2025 - Complete Travel Handbook"
      description="Navigate China with confidence - your complete travel guide covering visa, payments, transportation, food, accommodation and safety. Community-driven, always free.">
      <StructuredData type="WebSite" />
      <StructuredData 
        type="Organization"
      />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2>Why Choose China Travel Handbook?</h2>
                <div className="row">
                  <div className="col col--4">
                    <h3>🌟 Community-Driven</h3>
                    <p>Built by real travelers who've been there. Get authentic insights and up-to-date information from people who actually traveled to China.</p>
                  </div>
                  <div className="col col--4">
                    <h3>📱 Mobile-Friendly</h3>
                    <p>Access our guides on any device. Perfect for checking information while you're on the go in China.</p>
                  </div>
                  <div className="col col--4">
                    <h3>🆓 Always Free</h3>
                    <p>Open source and completely free. No hidden costs, no premium features - just comprehensive travel information for everyone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 