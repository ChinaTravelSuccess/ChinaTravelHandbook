import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  // 直接使用Redirect组件进行重定向
  return <Redirect to="/docs/en/introduction" />;
} 