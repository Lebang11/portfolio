"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MyPic from "./assets/IMG_1320.JPEG";
import "../styles/scss/customTheme.scss"


export default function Projects({children}) {
    const SkillCards = [
        {
            "name": "Python",
            "icon": "devicon-python-plain",
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
            "icon": "devicon-java-plain",
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
            "name": "WordPress",
            "icon": "devicon-wordpress-plain",
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
            "name": "Bootstrap",
            "icon": "devicon-bootstrap-plain",
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
            "name": "ExpressJS",
            "icon": "devicon-express-original",
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

    const cloudSkillCards = [
        {
            "name": "Google Cloud",
            "icon": "devicon-googlecloud-plain-wordmark",
            "description": "",    
        },
        {
            "name": "AWS",
            "icon": "devicon-amazonwebservices-plain-wordmark",
            "description": "",
    
        },
        {
            "name": "Netlify",
            "icon": "devicon-netlify-plain",
            "description": "",    
        },
        {
            "name": "Vercel",
            "icon": "devicon-vercel-original",
            "description": "",    
        },
        {
            "name": "Firebase",
            "icon": "devicon-firebase-plain",
            "description": "",    
        },
        {
            "name": "MongoDB",
            "icon": "devicon-mongodb-plain",
            "description": "",
        },
        {
            "name": "MySQL",
            "icon": "devicon-mysql-original",
            "description": "",
        }
    ];

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
                            <button className="nav-link" id="cloud-tab" data-bs-toggle="tab" data-bs-target="#cloud" type="button" role="tab" aria-controls="cloud" aria-selected="false">Cloud/Databases</button>
                            
                            <button className="nav-link" id="softskills-tab" data-bs-toggle="tab" data-bs-target="#softskills" type="button" role="tab" aria-controls="softskills" aria-selected="false">Soft Skills</button>

                        </div>
                    </nav>
                    
                    <div class="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="languages" role="tabpanel" aria-labelledby="languages-tab" tabindex="0">
                            <div  className="container d-flex justify-content-center align-items-center "  >
                                <div className="row">
                                    {
                                        SkillCards.map((skill) => {
                                            return (
                                                <div id={skill.name + `-id`} className="col-lg-3 col-md-4 col-sm-6 text-light p-4">
                                                    <div className="card bg-transparent border d-flex align-items-center justify-content-center">
                                                        <i className={skill.icon + " text-light mt-4"} style={{
                                                            fontSize: "7rem"
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
                                                                    document.getElementById(skill.name + `-id`).classList.remove(...['col-xl-12','col-lg-12', 'col-md-12', 'col-sm-12']);
                                                                    document.getElementById(skill.name + `-id`).classList.add(...['col-lg-3', 'col-md-4', 'col-sm-6']);
                                                                    document.getElementById(skill.name + "-exp").hidden = true;
                                                                } else {
                                                                    document.getElementById(skill.name + "-exp").hidden = false
                                                                    document.getElementById(skill.name + `-id`).classList.remove(...['col-lg-3', 'col-md-4', 'col-sm-6']);
                                                                    document.getElementById(skill.name + `-id`).classList.add(...['col-xl-12','col-lg-12', 'col-md-12', 'col-sm-12']);
    
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
                        <div className="tab-pane fade"  id="softskills" role="tabpanel" aria-labelledby="softskills-tab" tabindex="1">
                            <div  className="container d-flex justify-content-center align-items-center "  >
                                <div className="row">
                                    {
                                        softSkillCards.map((skill) => {
                                            return (
                                                <div id={skill.name + `-id`} className="col-lg-3 col-md-4 col-sm-6 text-light p-4">
                                                    <div className="card bg-transparent border d-flex align-items-center justify-content-center">
                                                        <i className={skill.icon + " text-light mt-4"} style={{
                                                            fontSize: "7rem"
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
                                                                    document.getElementById(skill.name + `-id`).classList.remove(...['col-xl-12','col-lg-12', 'col-md-12', 'col-sm-12']);
                                                                    document.getElementById(skill.name + `-id`).classList.add(...['col-lg-3', 'col-md-4', 'col-sm-6']);
                                                                    document.getElementById(skill.name + "-exp").hidden = true;
                                                                } else {
                                                                    document.getElementById(skill.name + "-exp").hidden = false
                                                                    document.getElementById(skill.name + `-id`).classList.remove(...['col-lg-3', 'col-md-4', 'col-sm-6']);
                                                                    document.getElementById(skill.name + `-id`).classList.add(...['col-xl-12','col-lg-12', 'col-md-12', 'col-sm-12']);

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
                        <div className="tab-pane fade"  id="cloud" role="tabpanel" aria-labelledby="cloud-tab" tabindex="1">
                            <div  className="container d-flex justify-content-center align-items-center "  >
                                <div className="row">
                                    {
                                        cloudSkillCards.map((skill) => {
                                            return (
                                                <div id={skill.name + `-id`} className="col-lg-3 col-md-4 col-sm-6 text-light p-4  mw-25">
                                                    <div className="card bg-transparent border d-flex align-items-center justify-content-center">
                                                        <i className={skill.icon + " text-light mt-4"} style={{
                                                            fontSize: "7rem"
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
                                                                    document.getElementById(skill.name + `-id`).classList.remove(...['col-xl-12','col-lg-12', 'col-md-12', 'col-sm-12']);
                                                                    document.getElementById(skill.name + `-id`).classList.add(...['col-lg-3', 'col-md-4', 'col-sm-6']);
                                                                    document.getElementById(skill.name + "-exp").hidden = true;
                                                                } else {
                                                                    document.getElementById(skill.name + "-exp").hidden = false
                                                                    document.getElementById(skill.name + `-id`).classList.remove(...['col-lg-3', 'col-md-4', 'col-sm-6']);
                                                                    document.getElementById(skill.name + `-id`).classList.add(...['col-xl-12','col-lg-12', 'col-md-12', 'col-sm-12']);

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