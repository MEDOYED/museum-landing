import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-desktop.png"
        alt="Exhibition artwork"
        priority
        width={625}
        height={663}
        className={styles.backgroundImage}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.date}>10 серпня - 10 листопада</p>

          <h1 className={styles.title}>Мистецтво ХІХ - ХХ ст.</h1>

          <p className={styles.subtitle}>Внесок українських митців у світову культуру 19-20ст</p>

          <Button variant="primary">Купити квиток</Button>
        </div>

        <div className={styles.durationBadge}>
          <span className={styles.duration}>10.08 - 10.10</span>
          <div className={styles.divider} />
        </div>
      </div>
    </section>
  );
};
