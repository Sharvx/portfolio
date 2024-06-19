import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './award-page.css'
import './header.css'
import { Link } from "react-router-dom";



export default function award_page(){
    return(
        <>
        <div className="header">
            <div className="logo">
                <div className="logo-icon"><FontAwesomeIcon icon={faCode} /></div>
                <Link to="/" className="logo-label">Sharvx.</Link>
            </div>
            <div className="extra">
            </div>
            <div className="about">
                <Link to="/about" className="about-button">About</Link>
            </div>
            <div className="projects">
                <Link to="/project" className="projects-button">Projects</Link>
            </div>
            <div className="awards">
                <Link to="/award" className="awards-button active">Awards</Link>
            </div>
        </div>
        <div className="main-body">
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