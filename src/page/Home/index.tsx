import { SimpleForm } from "../../components/SimpleForm";
import styles from "./styles.module.scss";

export function Home() {
  return (
    <div>
      <h1 className={styles.title}>React Hook Form Study</h1>
      <div className={styles.wrapper}>
        <SimpleForm />
      </div>
    </div>
  );
}
