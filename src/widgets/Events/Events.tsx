"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import styles from "./Events.module.scss";
import { useWindowSize } from "@/shared/lib/useWindowSize";

export const Events: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={styles.events}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Найближчі події</h2>

          {isMounted && windowWidth > 768 && (
            <Button variant="secondary">
              Календар подій
              <Image src="/icons/arrow.svg" alt="" width={20} height={20} />
            </Button>
          )}
        </div>

        <div className={styles.eventsList}>
          {/* Event 1 */}
          <div className={styles.event}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/event-2.png"
                alt="Кураторські екскурсії від Павла Гудімова"
                width={370}
                height={475}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.eventDate}>14.08 о 13:00</p>
              <h3 className={styles.eventTitle}>Кураторські екскурсії від Павла Гудімова</h3>
              <p className={styles.description}>
                Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої
                присутності – розгортатиметься...
              </p>
              <Button variant="primary">Зареєструватись</Button>
            </div>
          </div>

          {/* Event 2 */}
          <div className={styles.event}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/event-1.png"
                alt="Майстер-клас Подорож до Австралії"
                width={370}
                height={475}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.eventDate}>16.08 о 13:00</p>
              <h3 className={styles.eventTitle}>Майстер-клас "Подорож до Австралії"</h3>
              <p className={styles.description}>
                Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі
                - Австралія.
              </p>
              <Button variant="primary">Зареєструватись</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
