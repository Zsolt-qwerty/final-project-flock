"use client";
import HubCard from "../HubCard/HubCard";
import styles from "./HomeHubCardContainer.module.css";
import { useRouter } from "next/navigation";

//This is the Hub Container, only for the Profile

const HomeHubContainer = () => {
  const router = useRouter();

  const handleClick = (title: string, color: string, hubNumber: number) => {
    const encodedColor = encodeURIComponent(color);
    router.push(
      `SingleHub?title=${title}&color=${encodedColor}&hubNumber=${hubNumber}`
    );
  };

  return (
    <div className={styles.hCardContainer}>
      <HubCard
        label="art"
        onClick={() => handleClick("art", "#ffd955", 6)}
        className={styles.homeButtonArt}
      />

      <HubCard
        label="stamps"
        onClick={() => handleClick("stamps", "#275aff", 4)}
        className={styles.homeButtonStamps}
      />
      <HubCard
        label="techno"
        onClick={() => handleClick("techno", "#ff3f3f", 8)}
        className={styles.homeButtonTechno}
      />
      <HubCard
        label="book club"
        onClick={() => handleClick("book club", "#4b6e49", 7)}
        className={styles.homeButtonBookClub}
      />
      <HubCard
        label="photos"
        onClick={() => handleClick("photos", "#feb8b8", 5)}
        className={styles.homeButtonPhotos}
      />
      <HubCard
        label="martial arts"
        onClick={() => handleClick("martial arts", "#ff8534", 9)}
        className={styles.homeButtonMartialArts}
      />
    </div>
  );
};

export default HomeHubContainer;
