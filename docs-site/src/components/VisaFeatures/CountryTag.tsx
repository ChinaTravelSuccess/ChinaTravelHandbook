import React from 'react';
import clsx from 'clsx';
import styles from './CountryTag.module.css';

interface CountryTagProps {
  emoji: string;
  name: string;
  color?: 'blue' | 'pink' | 'green' | 'orange' | 'rose' | 'lime';
}

export default function CountryTag({ emoji, name, color = 'blue' }: CountryTagProps) {
  return (
    <span className={clsx(styles.tag, styles[color])}>
      {emoji} {name}
    </span>
  );
}