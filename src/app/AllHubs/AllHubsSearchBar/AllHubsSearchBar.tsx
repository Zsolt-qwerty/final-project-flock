"use client";
import styles from "./AllHubsSearchBar.module.css";

const AllHubsSearchBar: React.FC = () => {
  return (
    <form className={styles.searchInput}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search Hubs..."
        aria-label="Search Hubs"
      />
    </form>
  );
};

export default AllHubsSearchBar;
