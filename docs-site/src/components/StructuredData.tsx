import React from 'react';
import Head from '@docusaurus/Head';

interface StructuredDataProps {
  type?: 'WebSite' | 'TravelGuide' | 'HowTo' | 'FAQPage' | 'Organization';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  steps?: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function StructuredData({
  type = 'WebSite',
  title,
  description,
  url,
  image,
  author,
  datePublished,
  dateModified,
  steps,
  faqs,
}: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://china-travel-handbook.netlify.app';
    
    switch (type) {
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'China Travel Handbook',
          description: 'Your complete China travel guide - navigate China with confidence from visa applications to mobile payments. Community-driven, always free.',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'China Travel Handbook Community',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/img/logo.svg`
            }
          }
        };

      case 'TravelGuide':
        return {
          '@context': 'https://schema.org',
          '@type': 'TravelGuide',
          name: title || 'China Travel Guide',
          description: description,
          url: url,
          image: image ? `${baseUrl}${image}` : undefined,
          author: {
            '@type': 'Organization',
            name: author || 'China Travel Handbook Community'
          },
          datePublished: datePublished,
          dateModified: dateModified,
          about: {
            '@type': 'Place',
            name: 'China',
            description: 'Travel information and guides for visiting China'
          },
          publisher: {
            '@type': 'Organization',
            name: 'China Travel Handbook Community'
          }
        };

      case 'HowTo':
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: title,
          description: description,
          url: url,
          image: image ? `${baseUrl}${image}` : undefined,
          author: {
            '@type': 'Organization',
            name: author || 'China Travel Handbook Community'
          },
          datePublished: datePublished,
          dateModified: dateModified,
          step: steps?.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image ? `${baseUrl}${step.image}` : undefined
          }))
        };

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: title,
          url: url,
          mainEntity: faqs?.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        };

      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'China Travel Handbook',
          description: 'Open source community-driven travel guide for China',
          url: baseUrl,
          logo: `${baseUrl}/img/logo.svg`,
          sameAs: [
            'https://github.com/KatyTao/China-travel-handbook',
            'https://china-travel-handbook.netlify.app'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            url: 'https://github.com/KatyTao/China-travel-handbook/discussions'
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) {
    return null;
  }

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}