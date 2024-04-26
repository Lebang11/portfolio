import signature from './assets/IMG_5852.JPEG';
import Image from 'next/image';

export default function NavBar({children}) {
    return (
        <nav className="navbar navbar-expand-sm " style={{background: "black", borderBottomColor:"white"}}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="fals" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className='d-flex justify-content-center w-50'>
<div>
                            <Image 
                                style={{
                                    maxHeight: "60px"
                                }}
                                layout="responsive"
                                src={signature}
                                alt="My picture"
                            />
                        </div>
                </div>
                
                <div id="main-nav" className="w-50 me-3 collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <a href="#intro" className="nav-link text-light" style={{
                              fontFamily: "Gruppo"
                            }}>
                                Intro
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link text-light" style={{
                              fontFamily: "Gruppo"
                            }}>
                                About me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link text-light" style={{
                              fontFamily: "Gruppo"
                            }}>
                                Projects
                            </a>
                        </li>
                        
                    </ul>
                </div>
        
      </nav>
    );
}