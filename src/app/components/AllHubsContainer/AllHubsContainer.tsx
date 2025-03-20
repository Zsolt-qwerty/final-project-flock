"use client";
import HubCard from "../HubCard/HubCard";
import styles from "./AllHubsContainer.module.css";
import { useRouter } from "next/navigation";

const AllHubContainer = () => {
  const router = useRouter();

  const handleClick = (title: string, color: string, hubNumber: number) => {
    const encodedColor = encodeURIComponent(color);
    router.push(
      `SingleHub?title=${title}&color=${encodedColor}&hubNumber=${hubNumber}`
    );
  };
  return (
    <div className={styles.buttonDiv}>
      <HubCard
        label="Stamps"
        onClick={() => handleClick("art", "#ffd955", 6)}
        className={`${styles.hubButton} ${styles.blueHover}`}
      />
      <HubCard
        label="Photography"
        onClick={() => handleClick("photos", "#feb8b8", 5)}
        className={`${styles.hubButton} ${styles.coralHover}`}
      />
      <HubCard
        label="Painting"
        onClick={() => handleClick("painting", "#ffd955", 10)}
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
      <HubCard
        label="Cooking"
        onClick={() => handleClick("cooking", "#4b6e49", 11)}
        className={`${styles.hubButton} ${styles.greenHover}`}
      />
      <HubCard
        label="Gardening"
        onClick={() => handleClick("gardening", "#ff8534", 12)}
        className={`${styles.hubButton} ${styles.orangeHover}`}
      />
      <HubCard
        label="Reading"
        onClick={() => handleClick("reading", "#ff3f3f", 13)}
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Book Club"
        onClick={() => handleClick("book club", "#4b6e49", 7)}
        className={`${styles.hubButton} ${styles.greenHover}`}
      />
      <HubCard
        label="Music"
        onClick={() => handleClick("music", "#275aff", 15)}
        className={`${styles.hubButton} ${styles.blueHover}`}
      />
      <HubCard
        label="Hiking"
        onClick={() => handleClick("hiking", "#feabab", 16)}
        className={`${styles.hubButton} ${styles.coralHover}`}
      />
      <HubCard
        label="Cycling"
        onClick={() => handleClick("book club", "#4b6e49", 7)}
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
      <HubCard
        label="Sewing"
        onClick={() => handleClick("sewing", "#ff8534", 17)}
        className={`${styles.hubButton} ${styles.orangeHover}`}
      />
      <HubCard
        label="Cars"
        onClick={() => handleClick("cars", "#4b6e49", 18)}
        className={`${styles.hubButton} ${styles.greenHover}`}
      />
      <HubCard
        label="Jazz"
        onClick={() => handleClick("jazz", "#ff3f3f", 19)}
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Coding"
        onClick={() => handleClick("coding", "#275aff", 20)}
        className={`${styles.hubButton} ${styles.blueHover}`}
      />
      <HubCard
        label="Techno"
        onClick={() => handleClick("techno", "#ff3f3f", 8)}
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Traveling"
        onClick={() => handleClick("travelling", "#feabab", 22)}
        className={`${styles.hubButton} ${styles.coralHover}`}
      />
      <HubCard
        label="Martial Arts"
        onClick={() => handleClick("martial arts", "#ff8534", 9)}
        className={`${styles.hubButton} ${styles.orangeHover}`}
      />
      <HubCard
        label="Gaming"
        onClick={() => handleClick("gaming", "#ffd955", 23)}
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
      <HubCard
        label="Birdwatching"
        onClick={() => handleClick("bird watching", "#ff3f3f", 24)}
        className={`${styles.hubButton} ${styles.redHover}`}
      />
      <HubCard
        label="Art"
        onClick={() => handleClick("art", "#ffd955", 6)}
        className={`${styles.hubButton} ${styles.yellowHover}`}
      />
    </div>
  );
};

export default AllHubContainer;
