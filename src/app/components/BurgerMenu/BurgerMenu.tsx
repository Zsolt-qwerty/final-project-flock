"use client";

import styles from "./BurgerMenu.module.css";
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, signUp } from "../../utils/supabase/auth";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    const { user, error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
    }
  };

  const handleSignUp = async () => {
    const { user, error } = await signUp(email, password);
    if (error) {
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <nav className={styles.navContainer}>
      {!open && (
        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          ☰
        </button>
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
            <li className={`${styles.bmListItems} ${styles.profileItem}`}>
              <p>Profile</p>
            </li>
            <li className={`${styles.bmListItems} ${styles.aboutItem}`}>
              <Link href="/AboutUs">About us</Link>
            </li>
            <li className={`${styles.bmListItems} ${styles.rulesItem}`}>
              <Link href="/Rules">Community Rules</Link>
            </li>
          </ul>
          {user ? (
            <button className={styles.loginButton} onClick={handleSignOut}>
              Logout
            </button>
          ) : (
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.loginButton} onClick={handleSignIn}>
                Login
              </button>
              <button className={styles.loginButton} onClick={handleSignUp}>
                Sign Up
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
