"use client";

import React, { useState, useEffect } from "react";

import { useWindowSize } from "@/shared/lib/useWindowSize";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import styles from "./News.module.scss";

export const News: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Новини</h2>

          {isMounted && windowWidth > 768 && (
            <Button variant="secondary">
              Усі новини
              <Image src="/icons/arrow.svg" alt="" width={20} height={20} />
            </Button>
          )}
        </div>

        <div className={styles.newsGrid}>
          {/* News Item 1 */}
          <div className={styles.newsItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/news-1.png"
                alt="Оголошення переможця"
                width={570}
                height={370}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.newsDate}>9 серпня 2019</p>
              <h3 className={styles.newsTitle}>Оголошення переможця</h3>
              <p className={styles.description}>
                Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...
              </p>
            </div>
          </div>

          {/* News Item 2 */}
          <div className={styles.newsItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/news-2.png"
                alt="Міжнародний день котів"
                width={570}
                height={370}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.newsDate}>9 серпня 2019</p>
              <h3 className={styles.newsTitle}>Міжнародний день котів</h3>
              <p className={styles.description}>
                Музей з левами не може просто так взяти і пропустити Міжнародний день котів!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
