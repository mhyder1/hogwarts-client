import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-student">Create</Link></li>
                <li><Link to="/my-students">My Students</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/sorting">Get Sorted</Link></li>
            </ul>
            </nav>
        )
    }
}