"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG";

export default function Projects({children}) {
    const SkillCards = [
        {
            "name": "Python",
            "icon": "devicon-python-plain-wordmark",
            "description": "",
            "category": "Front-end/Back-end"
        },
        {
            "name": "JavaScript",
            "icon": "devicon-javascript-plain",
            "description": "",
            "category": "Front-end/Back-end"
    
        },
        {
            "name": "Java",
            "icon": "devicon-java-plain-wordmark",
            "description": "",
            "category": "Back-end"
    
        },
        {
            "name": "Dart",
            "icon": "devicon-dart-plain",
            "description": "",
            "category": "Front-end"
    
        },
        {
            "name": "ReactJS",
            "icon": "devicon-react-original",
            "description": "",
            "category": "Front-end"
    
        },
        {
            "name": "Flutter",
            "icon": "devicon-flutter-plain",
            "description": "",
            "category": "Front-end"
    
        },
        {
            "name": "NodeJS",
            "icon": "devicon-nodejs-plain-wordmark",
            "description": "",
            "category": "Back-end"
    
        }
    ]

    return (
        <section id="skills" className={styles.intro}>
            <div className={`d-flex flex-row justify-content-start p-4 ${styles.sectionboxSkills}`}>
                <div>
                    <p  className="text-light display-1 me-3 text-center" style={
                            {fontFamily: "Major Mono Display",
                            fontWeight: 400, overflow: "overlay"}}>
                            Skills
                    </p>
                    <div class="container d-flex justify-content-center align-items-center">
                        <div class="row">
                            {
                                SkillCards.map((skill) => {
                                    return (
                                        <div class="col text-light p-4">
                                            <div class="card bg-transparent border d-flex align-items-center justify-content-center">
                                                <i class={skill.icon + " text-light mt-4"} style={{
                                                    fontSize: "20vb"
                                                }}></i>
                                                <div class="card-body">
                                                    <h5 class="card-title text-light text-center">{skill.name}</h5>
                                                    <p className="card-subtitle text-light text-center fw-lighter" >{skill.category}</p>

                                                    <p id={skill.name + "-exp"} class=" text-light text-center blockquote-footer mt-3" hidden>
                                                        <small >
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident eius quia et molestias ut modi.	

                                                        </small></p>

                                                    <div className="d-flex justify-content-center mt-3">

                                                    <a class="btn btn-outline-light" onClick={(e) => {

                                                        if (document.getElementById(skill.name + "-exp").hidden == false) {
                                                            document.getElementById(skill.name + "-exp").hidden = true;
                                                        } else {
                                                            document.getElementById(skill.name + "-exp").hidden = false
                                                        }
                                                        
                                                    }}>Experience</a>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            

                        </div>
                    </div>
                </div>  
            </div>
        </section>
    );
}