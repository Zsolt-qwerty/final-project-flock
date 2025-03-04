import styles from "./page.module.css";
import HubContainer from "../app/components/HubContainer/HubContainer"
// This component serves as the main page for the root route (/). 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HubContainer />
      </main>
    </div>
  );
};
