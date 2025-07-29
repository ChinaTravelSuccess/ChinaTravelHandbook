import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Generate structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://china-travel-handbook.netlify.app${item.href}` : undefined
    }))
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <nav className={`breadcrumbs ${className || ''}`} aria-label="Breadcrumb">
        <ol className="breadcrumbs__list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumbs__item">
              {item.active || !item.href ? (
                <span className="breadcrumbs__text" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link 
                    className="breadcrumbs__link" 
                    to={item.href}
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  {index < items.length - 1 && (
                    <span className="breadcrumbs__separator" aria-hidden="true">
                      ›
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}