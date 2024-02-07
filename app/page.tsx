import styles from "./page.module.css";
import List from "@/components/List";

export default async function Home() {
  return (
    <main className={styles.main}>
      <List />
    </main>
  );
}
