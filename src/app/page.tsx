import styles from "./page.module.css";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <section className={styles.sectionCont}>
      <Form />
    </section>
  );
}
