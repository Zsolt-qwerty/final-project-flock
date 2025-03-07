"use client";
import HubCard from "../HubCard/HubCard";
import styles from "./HomeHubCardContainer.module.css";

//This is the Hub Container, only for the Home Page

//This file defines a React component called HubContainer.
// Its role is to serve as a container for HubCard components.
// includes the HubCard component with an href prop set to /SingleHub.
const HomeHubContainer = () => {
  return (
    <div className={styles.hCardContainer}>
      <HubCard label="art" href="/Arts" className={styles.homeButtonArt} />

      <HubCard
        label="stamps"
        href="/SingleHub"
        className={styles.homeButtonStamps}
      />
      <HubCard
        label="techno"
        href="/Techno"
        className={styles.homeButtonTechno}
      />
      <HubCard
        label="book club"
        href="/BookClub"
        className={styles.homeButtonBookClub}
      />
      <HubCard
        label="photos"
        href="/Photography"
        className={styles.homeButtonPhotos}
      />
      <HubCard
        label="martial arts"
        href="/MartialArts"
        className={styles.homeButtonMartialArts}
      />
    </div>
  );
};

export default HomeHubContainer;
