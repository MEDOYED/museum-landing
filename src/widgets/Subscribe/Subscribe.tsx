"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";
import styles from "./Subscribe.module.scss";
import { useWindowSize } from "@/shared/lib/useWindowSize";

export const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };

  const { windowWidth } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const shouldShow = isMounted && windowWidth > 768;

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Підпишіться на дайджест</h2>

          {isMounted && windowWidth <= 1280 && (
            <p className={styles.description}>
              Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та
              читайте статті від кураторів
            </p>
          )}

          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <Button variant="primary" type="submit">
            Підписатись
          </Button>
        </form>

        {isMounted && windowWidth > 1280 && (
          <p className={styles.description}>
            Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та
            читайте статті від кураторів
          </p>
        )}
      </div>
    </section>
  );
};
