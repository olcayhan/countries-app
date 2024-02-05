import getData from "@/services";
import styles from "./page.module.css";
import ListBox from "@/components/ListBox";

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <ListBox data={data} />
    </main>
  );
}
