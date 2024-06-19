import profile from "./profile.jpg"
import './main-page.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import './award-page.css'
import "./about-page.css";
import profile2 from "./profile2.jpg";
import languages from "./languages.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import email from "./email.png";
import "./project-page.css";
import project_logo_1 from "./logo1.png";
import project_logo_2 from "./logo2.png";
import { useRef } from "react";



function main_page(){

    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();

    const scrollHandler = (elmRef) =>{
        window.scrollTo({top:elmRef.current.offsetTop, behavior:"smooth"});
        console.log({top:elmRef.current.offsetTop})
    }

    


    return(
    <>
    
     <div className="header">
    <div className="logo">
        <div className="logo-icon"><FontAwesomeIcon icon={faCode} /></div>
        <div onClick={() => scrollHandler(section1)} className="logo-label">Sharvx.</div>
    </div>
    <div className="extra">
    </div>
    <div className="about">
        <div onClick={() => scrollHandler(section2)} className="about-button">About</div>
    </div>
    <div onClick={() => scrollHandler(section3)} className="projects">
        <div  className="projects-button">Projects</div>
    </div>
    <div onClick={() => scrollHandler(section4)} className="awards">
        <div  className="awards-button">Awards</div>
    </div>
</div>

<div className="main-body" ref={section1}>
        <div className="container">
            <div className="text-area">
                <div className="text1">
                - I am
                </div>
                <div className="text2">
                John Sharvey
                </div>
                <div className="text3">
                Web & Android Developer
                </div>
                <div className="text4">
                A novice developer who is always looking<br></br> for possibilities, experiences, and <br></br>information. 
                </div>
                <Link to="/about" className="more">
                More
                </Link>

            </div>
            <div className="image-area">
                <img src={profile} alt="" className="img1"/>
            </div>
        </div>
    </div>


    <div className="main-body" ref={section2}>
        <div className="container-1">
          <div className="image-area-1">
            <img src={profile2} alt="" />
          </div>
          <div className="text-area-1">
            <div className="introduction-text">Introduction</div>
            <div className="introduction-content">
              <span>John Sharvey G. Gupo</span> started learning code when he
              was in junior high. He tried to make a game in Roblox using the
              programming language Lua. But in order for him to create a game,
              he watched a lot of tutorials on Youtube but didn't understand how
              it works. So, when he graduated junior high, he took the IT
              program at STI College Alabang. After a year in school, He learned
              the basic in some programming language such as Java, HTML, CSS,
              and Javascript. With those knowledge that he learned, he can
              finally develop basic application and website.
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="text-area-2">
            <div className="languages-text">Programming Languages</div>
            <div className="languages-list-container">
              <div className="languages-list-1">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="languages-list-2">
                <ul>
                  <li>JSON</li>
                  <li>React</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="image-area-2">
            <img src={languages} alt="" />
          </div>
        </div>
        <div className="container-3">
            <div className="social-text">Socials</div>
            <div className="social-container">
                <a href="https://www.facebook.com/J.S.Gupo" className="facebook"><img src={facebook} alt="" /></a>
                <a href= "https://www.instagram.com/sharv_x/" className="intagram"><img src={instagram} alt="" /></a>
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=johnsharveygupo@gmail.com&tf=1" className="email"><img src={email} alt="" /></a>
            </div>
        </div>
      </div>

      <div className="main-body" ref={section3}>
        <div className="project-container-1">
          <div className="project-text-area-1">
            <div className="project-text-1">STICA AQUA</div>
            <div className="project-content-1">
              It is an android quiz application that is created for the teachers
              and students in STI College Alabang. In this application the
              teacher can make, customize, and track quizzes. It is made to
              lessen the cheating issue when taking a quiz. The application is
              prohibiting the use of back/home button when the quiz is ongoing.
            </div>
          </div>
          <div className="project-image-area-1">
            <img src={project_logo_1} alt="" />
          </div>
        </div>
        <div className="project-container-2">
            <div className="project-image-area-2">
                <img src={project_logo_2} alt="" />
            </div>
            <div className="project-text-area-2">
            <div className="project-text-2">STICA PIMS</div>
            <div className="project-content-2">
            It is a web-based application that 
            is made for the staff at STI College 
            Alabang. This web site allowed the 
            staffs to put and track the products 
            of STI College Alabang. They can also
             track the customers order
             and view the transaction history.
            </div>
            </div>
        </div>
      </div>

    <div className="main-body" ref={section4}>
            <div className="award-container">
            <div className="award-2023">
                <div className="award-text-1">
                    2023
                </div>
                <div className="awards-list-1">
                    <ul>
                        <li>Programmer of the Year</li>
                    </ul>
                </div>
            </div>
            <div className="award-2024">
                <div className="award-text-2">
                    2024
                </div>
                <div className="awards-list-2">
                    <ul>
                        <li>Codefest Champion(Local Division)</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    
    </>
    
)
}

export default main_page