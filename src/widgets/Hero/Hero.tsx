import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/images/hero-desktop.png"
          alt="Exhibition artwork"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Мистецтво ХІХ - ХХ ст.</h1>
          
          <p className={styles.subtitle}>
            Внесок українських митців у світову культуру 19-20ст
          </p>
          
          <p className={styles.date}>10 серпня - 10 листопада</p>
          
          <Button variant="primary">Купити квиток</Button>
        </div>
        
        <div className={styles.durationBadge}>
          <div className={styles.divider} />
          <span className={styles.duration}>10.08 - 10.10</span>
        </div>
      </div>
    </section>
  );
};
