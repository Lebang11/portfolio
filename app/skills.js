"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG";
import "../styles/scss/customTheme.scss"


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
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Languages/Frameworks</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Soft Skills</button>
                        </li>
                        
                    </ul>
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row">
                            {
                                SkillCards.map((skill) => {
                                    return (
                                        <div className="col text-light p-4">
                                            <div className="card bg-transparent border d-flex align-items-center justify-content-center">
                                                <i className={skill.icon + " text-light mt-4"} style={{
                                                    fontSize: "20vb"
                                                }}></i>
                                                <div className="card-body">
                                                    <h5 className="card-title text-light text-center">{skill.name}</h5>
                                                    <p className="card-subtitle text-light text-center fw-lighter" >{skill.category}</p>

                                                    <p id={skill.name + "-exp"} className=" text-light text-center blockquote-footer mt-3" hidden>
                                                        <small >
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident eius quia et molestias ut modi.	

                                                        </small></p>

                                                    <div className="d-flex justify-content-center mt-3">

                                                    <a className="btn btn-outline-light" onClick={(e) => {

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