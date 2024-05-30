import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/portait_enhanced.png";

export default function Intro() {

    return (
        <div className="">
            <section id="intro" className={styles.intro}>
            <div className={`row p-4 ${styles.sectionboxIntro}`}>
                    <div className={styles.namediv + " col-6"}>
                        <p  className="text-light display-1 me-3 text-center" style={
          {fontFamily: "Major Mono Display",
          fontWeight: 400, overflow: "overlay"}}>
                            Lebang <br/>Nong</p>
                        <p className="lead fs-6" style={{
                            color: "#6a6a6a"
                        }}>Hey! I'm <span className="text-light">Lebang Nong </span>, a Full Stack Software Engineer specializing in <span style={{
                            color: "PaleTurquoise"
                        }}>web, mobile, cloud, and backend development. </span>I create robust, scalable applications with a focus on seamless user experiences. Explore my projects to see how I blend creativity and technology to build impactful solutions.</p>
                    </div>
                    <div className="col-6">
            <Image 
                style={{
                    borderRadius:10
                }}
              layout="responsive"
              src={MyPic}
              width={400}
              height={400}
              alt="My picture"
            />
                </div>
            </div>
       
        </section>
        </div>
        
    );
}

