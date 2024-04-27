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
    
        },
        {
            "name": "NextJS",
            "icon": "devicon-nextjs-original-wordmark",
            "description": "",
            "category": "Front-end/Back-end"
    
        }
    ]

    const softSkillCards = [
        {
            "name": "Leadership",
            "icon": "fa-solid fa-chess-king",
            "description": ""
        },
        {
            "name": "Teamwork",
            "icon": "fa-solid fa-people-group",
            "description": ""
        },
        {
            "name": "Adaptability",
            "icon": "fa-solid fa-arrow-rotate-right",
            "description": ""
        },
        {
            "name": "Problem solving",
            "icon": "fa-solid fa-magnifying-glass",
            "description": ""
        },
        {
            "name": "Critical thinking",
            "icon": "fa-solid fa-lightbulb",
            "description": ""
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
                    <nav>
                        <div className="nav nav-tabs" id="myTab" role="tablist">
                            <button className="nav-link active" id="languages-tab" data-bs-toggle="tab" data-bs-target="#languages" type="button" role="tab" aria-controls="languages" aria-selected="true">Languages/Frameworks</button>
                            <button className="nav-link" id="softskills-tab" data-bs-toggle="tab" data-bs-target="#softskills" type="button" role="tab" aria-controls="softskills" aria-selected="false">Soft Skills</button>
                        </div>
                    </nav>
                    
                    <div class="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="languages" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div  className="container d-flex justify-content-center align-items-center "  >
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
                        <div className="tab-pane fade"  id="softskills" role="tabpanel" aria-labelledby="profile-tab" tabindex="1">
                        <div  className="container d-flex justify-content-center align-items-center "  >
                            <div className="row">
                                {
                                    softSkillCards.map((skill) => {
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
                </div>
            </div>
        </section>
    );
}