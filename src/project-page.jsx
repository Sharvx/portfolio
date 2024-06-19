import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "./project-page.css";
import { Link } from "react-router-dom";

import project_logo_1 from "./logo1.png";
import project_logo_2 from "./logo2.png";


export default function project_page() {
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
          <Link to="/about" className="about-button">
            About
          </Link>
        </div>
        <div className="projects">
          <Link to="/project" className="projects-button active">
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
    </>
  );
}
