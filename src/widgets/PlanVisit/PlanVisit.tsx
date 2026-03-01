import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button';
import styles from './PlanVisit.module.scss';

export const PlanVisit: React.FC = () => {
  return (
    <section className={styles.planVisit}>
      <div className={styles.background}>
        <Image
          src="/images/plan-visit.png"
          alt="Plan your visit"
          fill
          className={styles.backgroundImage}
        />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Сплануйте
            <br />
            візит до музею
          </h2>
          
          <p className={styles.description}>
            Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть
            квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись
            мистецтвом
          </p>
          
          <Button variant="primary">Почати</Button>
        </div>
      </div>
    </section>
  );
};
