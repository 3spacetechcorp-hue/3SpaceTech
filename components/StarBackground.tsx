import React from 'react';
import styles from '@/styles/StarBackground.module.css';

export default function StarBackground() {
  return (
    <div className={styles.starfield}>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
    </div>
  );
}
