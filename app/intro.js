import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG";

export default function Intro() {

    return (
        
<section className={styles.intro}>
        <div className="d-flex flex-row justify-content-end border border-dark border-end-0 border-start-0 p-4">
          <div className={styles.namediv}>
            <p  className="text-light me-3 text-center" style={
          {fontFamily: "Major Mono Display",
          fontWeight: 400, fontSize: 60}}>
            Lebang <br/>Nong</p>
            <p className="lead text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint error, sit ea animi asperiores eveniet reprehenderit eius atque neque tempore veniam quo facilis dolores vitae doloribus modi possimus. Perspiciatis, fugiat?</p>
            </div>
          <div style={{
            width:"50%"
          }}>
            <Image 
              layout="responsive"
              src={MyPic}
              width={500}
              height={500}
              alt="My picture"
            />
          </div>
        </div>
       
      </section>
    );
}

