import styles from "./page.module.css";
import ListBox from "@/components/ListBox";

export default async function Home() {
  return (
    <main className={styles.main}>
      <ListBox />
    </main>
  );
}
