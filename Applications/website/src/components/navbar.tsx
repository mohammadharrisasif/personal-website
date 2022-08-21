import { NavLink } from "react-router-dom";



export default function Navbar() {
    return (
        <div>
            <nav id="nav">
                <ul className="container">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/aboutme">About Me</NavLink></li>
					<li><NavLink to="/projects">Projects</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
            </nav>
        </div>
    )
}



