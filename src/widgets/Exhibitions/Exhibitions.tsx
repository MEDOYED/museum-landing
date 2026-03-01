import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button';
import styles from './Exhibitions.module.scss';

export const Exhibitions: React.FC = () => {
  return (
    <section className={styles.exhibitions}>
      <div className={styles.container}>
        <h2 className={styles.title}>Актуальні виставки</h2>
        
        <div className={styles.exhibitionsGrid}>
          {/* Exhibition 1 */}
          <div className={styles.exhibition}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/exhibition-1.png"
                alt="Кураторська виставка Ангели"
                width={570}
                height={484}
                className={styles.image}
              />
            </div>
            
            <div className={styles.content}>
              <p className={styles.exhibitionDate}>11.07 - 22.09</p>
              <h3 className={styles.exhibitionTitle}>
                Кураторська виставка "Ангели"
              </h3>
              <p className={styles.description}>
                Виставковий проект «Ангели» – знакова подія для української
                культури і водночас наймасштабніший...
              </p>
              <Button variant="primary">Купити квиток</Button>
            </div>
          </div>
          
          {/* Exhibition 2 */}
          <div className={styles.exhibition}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/exhibition-2.png"
                alt="Мистецтво ХХ ст. — XXI ст."
                width={570}
                height={484}
                className={styles.image}
              />
            </div>
            
            <div className={styles.content}>
              <p className={styles.exhibitionDate}>Діє постійно</p>
              <h3 className={styles.exhibitionTitle}>
                Мистецтво ХХ ст. — XXI ст.
              </h3>
              <p className={styles.description}>
                Знакові роботи Алли Горської, Миколи Самокиша, Федора
                Кричевського та інших митців.
              </p>
              <Button variant="primary">Купити квиток</Button>
            </div>
          </div>
        </div>
        
        <div className={styles.archiveButtonWrapper}>
          <Button variant="secondary">
            Архів виставок
            <Image
              src="/icons/arrow.svg"
              alt=""
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
