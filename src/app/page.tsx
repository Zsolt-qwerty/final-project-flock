import styles from "./page.module.css";
import HubContainer from "../app/components/HubContainer/HubContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/NavBar/NarBar";
// This component serves as the main page for the root route (/).

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <SearchBar />
      <main className={styles.main}>
        <HubContainer />
      </main>
    </div>
  );
}
