import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
            <ul className="navbar">
                <li className="nav-links"><Link to="/">Home</Link></li>
                <li className="nav-links"><Link to="/create-student">Create</Link></li>
                <li className="nav-links"><Link to="/my-students">My Students</Link></li>
                {/* <li className="nav-links"><Link to="/login">Login</Link></li>
                <li className="nav-links"><Link to="/signup">Sign Up</Link></li> */}
            </ul>
            </nav>
        )
    }
}