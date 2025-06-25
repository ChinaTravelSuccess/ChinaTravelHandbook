import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 