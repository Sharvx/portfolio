import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "./about-page.css";
import { Link } from "react-router-dom";
import profile from "./profile2.jpg";
import languages from "./languages.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import email from "./email.png";


export default function about_page() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <Link to="/" className="logo-label">
            Sharvx.
          </Link>
        </div>
        <div className="extra"></div>
        <div className="about">
          <Link to="/about" className="about-button active">
            About
          </Link>
        </div>
        <div className="projects">
          <Link to="/project" className="projects-button">
            Projects
          </Link>
        </div>
        <div className="awards">
          <Link to="/award" className="awards-button">
            Awards
          </Link>
        </div>
      </div>
      <div className="main-body">
        <div className="container-1">
          <div className="image-area-1">
            <img src={profile} alt="" />
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
    </>
  );
}
