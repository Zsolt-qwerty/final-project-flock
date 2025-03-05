"use client";
import styles from "./BurgerMenu.module.css";
import { useState } from "react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      {!open && (
        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          ☰
        </button> // Only show the button when menu is closed
      )}

      {open && (
        <div className={styles.menuContainer}>
          <button className={styles.menuButton} onClick={() => setOpen(!open)}>
            x
          </button>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Hubs</li>
            <li>About Us</li>
            <li>Community Rules</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
