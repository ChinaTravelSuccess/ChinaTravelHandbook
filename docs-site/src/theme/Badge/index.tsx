import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type BadgeType = 'success' | 'danger' | 'info' | 'warning';

export default function Badge({
  type = 'info',
  children,
}: {
  type?: BadgeType;
  children: React.ReactNode;
}) {
  return (
    <span className={clsx(styles.badge, styles[type])}>
      {children}
    </span>
  );
}