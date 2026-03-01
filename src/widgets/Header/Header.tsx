import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/icons/logo.svg"
            alt="Museum Logo"
            width={124}
            height={37}
          />
        </div>
        
        <div className={styles.controls}>
          <div className={styles.language}>
            <span className={styles.languageText}>UA</span>
            <Image
              src="/icons/dropdown.svg"
              alt="Language dropdown"
              width={10}
              height={7}
            />
          </div>
          
          <button className={styles.menuButton}>
            <Image
              src="/icons/menu.svg"
              alt="Menu"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
