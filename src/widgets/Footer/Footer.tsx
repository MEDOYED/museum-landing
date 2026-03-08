"use client";

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Contacts Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Контакти</h3>
            <address className={styles.address}>
              Київ,
              <br />
              вул. М. Грушевського, 6<br />
              тел. 278-13-57, 278-74-54
              <br />
              info@namu.kiev.ua
            </address>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Schedule Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Розклад роботи</h3>
            <div className={styles.schedule}>
              ПН: вихідний
              <br />
              ВТ: вихідний
              <br />
              СР: 10:00 - 17:00
              <br />
              ЧТ: 10:00 - 17:00
              <br />
              ПТ: 12:00 - 19:00
              <br />
              СБ: 11:00 - 18:00
              <br />
              НД: 10:00 - 17:00
            </div>
          </div>

          {/* Navigation Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Головна</h3>
            <nav className={styles.nav}>
              <a href="#" className={styles.link}>
                Виставки
              </a>
              <a href="#" className={styles.link}>
                Події
              </a>
              <a href="#" className={styles.link}>
                Новини
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.info}>
            <p className={styles.copyright}>© 2010 — 2020</p>
            <a href="#" className={styles.privacyLink}>
              Privacy — Terms
            </a>
          </div>
        </div>
      </div>

      <button onClick={handleScrollToTop} className={styles.scrollTop}>
        <Image src="/icons/scroll-up.svg" alt="Scroll to top" width={30} height={30} />
      </button>
    </footer>
  );
};
