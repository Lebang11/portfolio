import Image from "next/image";
import styles from "./page.module.css";
import THPic from "./assets/logo-color.ico";
import TH1 from "./assets/TH1.png";
import TH2 from "./assets/TH2.png";
import TH3 from "./assets/TH3.png";
import TH4 from "./assets/TH4.png";
import TH5 from "./assets/TH5.png";






export default function Projects({children}) {
    return (
        <section id="projects" className={styles.intro}>
            <div className={`d-flex flex-column justify-content-start p-4 `}>
                    <div>
                        <p  className="d-block text-light display-1 me-3 text-center" style={
          {fontFamily: "Major Mono Display",
          fontWeight: 400, overflow: "overlay"}}>
                            Projects</p>
                        </div>
                        <div className="row gap-3 justify-content-center">
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}>
                               <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src={THPic} layout="responsive" width={500} height={700}/>
      <div class="carousel-caption d-none d-md-block">
        
        
      </div>
    </div>
    <div class="carousel-item">
    <Image src={TH1} layout="responsive" width={500} height={500}/>
    
    </div>
    <div class="carousel-item">
    <Image src={TH2} layout="responsive" width={500} height={500}/>
   
    </div>
    <div class="carousel-item">
    <Image src={TH3} layout="responsive" width={500} height={500}/>
    
    </div>
    <div class="carousel-item">
    <Image src={TH4} layout="responsive" width={500} height={500}/>
    
    </div>
    <div class="carousel-item">
    <Image src={TH5} layout="responsive" width={500} height={500}/>
   
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                                 
                                <h2 className="card-title text-light">Team-Hub</h2>
                                <p className="card-body text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio assumenda quo libero minus deserunt tempora ea quasi blanditiis, corrupti pariatur, veritatis ipsa quae consectetur.</p>
                                <div className="row gap-3 justify-content-center">
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-javascript-plain text-light mx-1"></i>JavaScript</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-react-original text-light mx-1"></i>ReactJS</p></div>
                                   
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-nodejs-plain-wordmark text-light mx-1"></i>NodeJS</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-express-original text-light mx-1"></i>ExpressJS</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-bootstrap-plain text-light mx-1"></i>Bootstrap</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-mongodb-plain text-light mx-1"></i>MongoDB</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-firebase-plain text-light mx-1"></i>Firebase</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-netlify-plain text-light mx-1"></i>Netlify</p></div>
                                    <div className="card bg-transparent border-light col-3 py-0"><p className="card-body text-light p-0 pt-2" style={{
                                        fontSize: "90%"
                                    }}><i className="devicon-vercel-original text-light mx-1"></i>Vercel</p></div>
                                    

                                    {/* <div className="card bg-transparent border-light col-4 m-2 p py-0"><p className="card-body text-light fs-6 p-0 pt-2 "><i className="devicon-react-original text-light"></i></p></div> */}
                                    <a className="text-end atag fs-5" style={{
                                        color:"PaleTurquoise"
                                    }} target="_blank" href="https://team-hub.netlify.app/"><i className="devicon-chrome-plain"></i> Website</a>
                                    <a className="text-end atag fs-5" style={{
                                        color:"PaleTurquoise"
                                    }} target="_blank" href="https://github.com/Lebang11/teamhub-client"><i className="devicon-github-original"></i> Repository (client)</a>
                                     <a className="text-end atag fs-5" style={{
                                        color:"PaleTurquoise"
                                    }} target="_blank" href="https://github.com/Lebang11/teamhub-server"><i className="devicon-github-original"></i> Repository (server)</a>
                                </div>
                            </div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-12" style={{
                                maxWidth:"700px"
                            }}></div>
                            <div className="card bg-transparent border col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{
                                maxWidth:"700px"
                            }}></div>

                        </div>

                    
            </div>
       
        </section>
    );
}