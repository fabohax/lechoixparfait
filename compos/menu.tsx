// components/menu.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './menu.module.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className='cursor-pointer invert'>
      <div className='z-100'>
        {isMenuOpen ? (
          <Image
            src="/close.svg"
            height={25}
            width={25}
            alt="menu"
            onClick={closeMenu}
            className={styles.menuIcon}
          />
        ) : (
          <Image
            src="/open.svg"
            height={25}
            width={25}
            alt="menu"
            onClick={openMenu}
            className={styles.menuIcon}
          />
        )}
      </div>
      <div className={`${styles.menuContainer} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/blog" className='block hover:underline p-4 mr-8 text-3xl'>Blog</Link>
        <Link href="/lemanuel" className='block hover:underline p-4 mr-8 text-3xl'>Manuel</Link>
        <Link href="/equipe" className='block hover:underline p-4 text-3xl'>Équipe</Link>
        <Link href="/don" className='block hover:underline p-4 text-3xl'>Don</Link>
      </div>
    </div>
  );
}

export default Menu;
