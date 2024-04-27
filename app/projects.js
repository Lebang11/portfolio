import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG";


export default function Projects({children}) {
    return (
        <section id="projects" className={styles.intro}>
            <div className={`d-flex flex-row justify-content-start p-4 ${styles.sectionbox}`}>
                    <div>
                        <p  className="text-light display-1 me-3 text-center" style={
          {fontFamily: "Major Mono Display",
          fontWeight: 400, overflow: "overlay"}}>
                            Projects</p>
                        </div>
                    
            </div>
       
        </section>
    );
}