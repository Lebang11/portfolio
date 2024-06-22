"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/portait_enhanced.png";
import{motion} from "framer-motion";


export default function Intro() {

    return (
        <div className="">
            <section id="intro" className={styles.intro}>
            <motion.div animate = { {scale: [0.5,1], }} transition={{type:"bounce", duration: 1.3}} className={`row p-4 ${styles.sectionboxIntro}`}>
                    <div className=" d-flex flex-column-reverse justify-content-center align-items-center col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                        <Image 
                            style={{
                                borderRadius:10,
                                maxWidth: 250
                            }}
                        layout="responsive"
                        src={MyPic}
                        width={400}
                        height={400}
                        alt="My picture"
                        />
                    </div>
                    <div className={styles.namediv + "col-lg-6 col-md-6 col-sm-6 col-xs-12 "}>
                        <p  className="text-light display-1 me-3 text-center" style={
          {fontFamily: "Major Mono Display",
          fontWeight: 400, overflow: "overlay"}}>
                            Lebang <br/>Nong</p>
                        <p className="lead fs-6 text-center" style={{
                            color: "#6a6a6a"
                        }}>Hey! I'm <span className="text-light">Lebang Nong </span>, a Full Stack Software Engineer specializing in <span style={{
                            color: "PaleTurquoise"
                        }}>web, mobile, cloud, and backend development. </span>I create robust, scalable applications with a focus on seamless user experiences. Explore my projects to see how I blend creativity and technology to build impactful solutions.</p>
                    </div>
                    
            </motion.div>
       
        </section>
        </div>
        
    );
}

