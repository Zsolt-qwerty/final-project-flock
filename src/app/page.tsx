import styles from "./page.module.css";
import HomeHubContainer from "./components/HomeHubContainer/HomeHubContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/NavBar/NarBar";
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
        <HomeHubContainer />
      </div>
    </main>
  );
}
