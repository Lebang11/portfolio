import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG"
import Intro from "./intro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro/>
    </main>
  );
}
