"use client";
import styles from "./BurgerMenu.module.css";
import { useState } from "react";
import Link from "next/link";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navContainer}>
      {!open && (
        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          ☰
        </button> // Only show the button when menu is closed
      )}

      {open && (
        <div className={styles.menuContainer}>
          <button className={styles.xButton} onClick={() => setOpen(!open)}>
            x
          </button>
          <ul className={styles.menuList}>
            <li className={`${styles.bmListItems} ${styles.homeItem}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${styles.bmListItems} ${styles.HubsItem}`}>
              <Link href="/Hubs">All Hubs</Link>
            </li>
            <li className={`${styles.bmListItems} ${styles.aboutItem}`}>
              <Link href="/AboutUs">About us</Link>
            </li>
            <li className={`${styles.bmListItems} ${styles.rulesItem}`}>
              <Link href="/Rules">Community Rules</Link>
            </li>
          </ul>
          <button className={styles.loginButton}>Login/Sign Up</button>
        </div>
      )}
    </nav>
  );
}
