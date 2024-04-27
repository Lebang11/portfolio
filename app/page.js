import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG"
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  );
}
