"use client";
import HubCard from "../HubCard/HubCard";
import styles from "./AllHubsContainer.module.css";

//This is the Hub Container, only for the All Hubs Page

//This file defines a React component called HubContainer.
// Its role is to serve as a container for HubCard components.
// includes the HubCard component with an href prop set to /SingleHub.
const AllHubContainer = () => {
  return (
    <div className={styles.buttonDiv}>
      <HubCard
        label="Stamps"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.blueHover}`}
      />
      <HubCard
        label="Photography"
        href="/Photography"
        className={`${styles.hubButton} ${styles.coralHover}`}
      />
      <HubCard
        label="Painting"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
      <HubCard
        label="Cooking"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.greenHover}`}
      />
      <HubCard
        label="Gardening"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.orangeHover}`}
      />
      <HubCard
        label="Reading"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Book Club"
        href="/BookClub"
        className={`${styles.hubButton} ${styles.greenHover}`}
      />
      <HubCard
        label="Music"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.blueHover}`}
      />
      <HubCard
        label="Hiking"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.coralHover}`}
      />
      <HubCard
        label="Cycling"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
      <HubCard
        label="Sewing"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.orangeHover}`}
      />
      <HubCard
        label="Cars"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.greenHover}`}
      />
      <HubCard
        label="Jazz"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Coding"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.blueHover}`}
      />
      <HubCard
        label="Techno"
        href="/Techno"
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Traveling"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.coralHover}`}
      />
      <HubCard
        label="Martial Arts"
        href="/MartialArts"
        className={`${styles.hubButton} ${styles.orangeHover}`}
      />
      <HubCard
        label="Gaming"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
      <HubCard
        label="Birdwatching"
        href="/SingleHub"
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Art"
        href="/Arts"
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
    </div>
  );
};

export default AllHubContainer;
