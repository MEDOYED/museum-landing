"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import { useWindowSize } from "@/shared/lib/useWindowSize";
import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const { windowWidth } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Блокування скролу body при відкритому меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Закриття по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Обробник кліку на навігаційні посилання з плавним скролом
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        onClose(); // Закриваємо меню після кліку
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.burgerMenu}>
      {/* Content */}
      <div className={styles.content}>
        {/* Info Block */}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Розклад сьогодні:</span>
            <span className={styles.infoValue}>12:00 - 19:00</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Адреса:</span>
            <span className={styles.infoValue}>Київ, вул. М. Грушевського, 6</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#exhibitions" onClick={handleNavClick} className={styles.navItem}>
            Актуальні виставки
          </a>
          <a href="#events" onClick={handleNavClick} className={styles.navItem}>
            Найближчі події
          </a>
          <a href="#news" onClick={handleNavClick} className={styles.navItem}>
            Новини
          </a>
        </nav>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Button */}
        <Button variant="primary">Купити квиток</Button>

        {/* Language (тільки для mobile) */}
        {isMounted && windowWidth <= 768 && (
          <div className={styles.languageMobile}>
            <span className={styles.languageText}>UA</span>
            <Image src="/icons/dropdown.svg" alt="Language dropdown" width={10} height={7} />
          </div>
        )}

        {/* Background Image (тільки для tablet/desktop) */}
        {isMounted && windowWidth > 768 && (
          <Image
            src="/images/menu-background-6d77b8.png"
            alt=""
            className={styles.backgroundImage}
            width={624}
            height={697}
            priority
          />
        )}
      </div>
    </div>
  );
};
