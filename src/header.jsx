import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import { Link } from "react-router-dom";



function header(){
    return(
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
                <Link to="/award" className="awards-button">Awards</Link>
            </div>
        </div>
    )
}

export default header