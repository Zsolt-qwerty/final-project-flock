// Fetch all hubs.
// Add search functionality.
// Display all hubs dynamically.

"use client";
import AllHubContainer from "../components/AllHubsContainer/AllHubsContainer";
import styles from "./AllHubs.module.css";

export default function AllHubsPage() {
  return (
    <>
      <div className={styles.banner}></div>
      <AllHubContainer/>
    </>
  );
}
