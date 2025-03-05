import styles from "./page.module.css";
import HubContainer from "../app/components/HubContainer/HubContainer";
import SearchBar from "./components/SearchBar/SearchBar";
// import Navbar from "./components/NavBar/NarBar";
// This component serves as the main page for the root route (/).

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.navLogoContainer}>
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={styles.logoContainer}>
          <p className={styles.headerLogo}>
            find your <span className={styles.flockText}>FLOCK</span>
          </p>
        </div>
      </div>
      <div className={styles.hubDiv}>
        <HubContainer />
      </div>
    </main>
  );
}
