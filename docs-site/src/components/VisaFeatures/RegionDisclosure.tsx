import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './RegionDisclosure.module.css';

interface RegionDisclosureProps {
  emoji: string;
  title: string;
  badge: string;
  color?: 'blue' | 'green' | 'orange' | 'pink' | 'lime' | 'rose';
  children: React.ReactNode;
}

export default function RegionDisclosure({
  emoji,
  title,
  badge,
  color = 'blue',
  children,
}: RegionDisclosureProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.region}>
      <div
        className={clsx(styles.bar, styles[color])}
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.badge}>{badge}</span>
        <span
          className={styles.arrow}
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
      </div>
      {open && <div className={styles.content}>{children}</div>}
    </div>
  );
}