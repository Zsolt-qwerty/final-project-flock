"use client";

import styles from "./BurgerMenu.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, signUp, supabase } from "../../utils/supabase/auth";
import { User } from "@supabase/supabase-js";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [showAuthForm, setShowAuthForm] = useState(false);

  // Fetch the user when the component mounts
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const handleSignIn = async () => {
    const { user, error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
      setShowAuthForm(false);
      window.location.reload();
    }
  };
  //Sign up
  const handleSignUp = async () => {
    const { user, error } = await signUp(email, password, userName, userBio);
    if (error) {
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
      setShowAuthForm(false);
      window.location.reload(); 
    }
  };
  //Sign out 
  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    window.location.reload();
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
              <Link href="/AllHubs">All Hubs</Link>
            </li>
            <li className={`${styles.bmListItems} ${styles.profileItem}`}>
              <Link href="/Profile">Profile</Link>
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
            <button className={styles.loginButton} onClick={() => setShowAuthForm(true)}>
              Login / Sign Up
            </button>
          )}
        </div>
      )}
      {/* login/ sign up form */}
      {showAuthForm && (
        <div className={styles.authOverlay}>
          <div className={styles.authFormContainer}>
            <button onClick={() => setShowAuthForm(false)}>✖</button>
            <button className={styles.toggleButton} onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Go to Sign Up" : "Go to Login"}
            </button>
            {/* Login form */}
            {isLogin ? (
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
              </div>
            ) : (
              // Sign up form
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
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Bio"
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                />
                <button className={styles.loginButton} onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            )}
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      )}
    </nav>
  );
}