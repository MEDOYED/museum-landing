"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import { useWindowSize } from "@/shared/lib/useWindowSize";
import { BurgerMenu } from "@/widgets/BurgerMenu";

export const Header: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/icons/logo.svg" alt="Museum Logo" width={124} height={37} />
          </div>

          <div className={styles.controls}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              <Image src="/icons/menu.svg" alt="Menu" width={30} height={30} />
            </button>

            {isMounted && windowWidth > 768 && (
              <div className={styles.language}>
                <span className={styles.languageText}>UA</span>
                <Image src="/icons/dropdown.svg" alt="Language dropdown" width={10} height={7} />
              </div>
            )}
          </div>
        </div>
      </header>

      <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};
