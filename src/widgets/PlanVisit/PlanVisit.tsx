"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import styles from "./PlanVisit.module.scss";

import { useWindowSize } from "@/shared/lib/useWindowSize";

export const PlanVisit: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shouldShowImage = isMounted && windowWidth > 1280;

  return (
    <section className={styles.planVisit}>
      {shouldShowImage && (
        <Image
          src="/images/plan-visit.png"
          alt="Plan your visit"
          width={578}
          height={800}
          className={styles.backgroundImage}
        />
      )}

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Сплануйте
            <br />
            візит до музею
          </h2>

          <p className={styles.description}>
            Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь,
            щоб ніщо не завадило вам насолоджуватись мистецтвом
          </p>

          <Button variant="primary">Почати</Button>
        </div>
      </div>
    </section>
  );
};
