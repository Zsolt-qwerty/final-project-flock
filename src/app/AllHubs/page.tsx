"use client";
import AllHubContainer from "../components/AllHubsContainer/AllHubsContainer";
import styles from "./AllHubs.module.css";
import AllHubsSearchBar from "./AllHubsSearchBar/AllHubsSearchBar";

export default function AllHubsPage() {
  return (
    <main className={styles.allHubsDiv}>
      <div className={styles.bannerDiv}>
        <div className={styles.titleContainer}>
          <h1 className={styles.hubsTitle}>hubs</h1>
        </div>
        <div className={styles.searchContainer}>
          <AllHubsSearchBar />
        </div>
        <div className={styles.logoContainer}>
          <p className={styles.flockLogo}>FLOCK</p>
        </div>
      </div>
      <AllHubContainer />
    </main>
  );
}
