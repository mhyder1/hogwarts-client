// import React from 'react';
// import "./Header.css"

// export default class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1 className="hogwarts-header">
//                     Create a Hogwarts Student
//                 </h1>
//             </div>
//         )
//     }
// }

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hyph } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import './Header.css';
import AppContext from '../../contexts/context'


export default class Header extends Component {
    static contextType = AppContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.context.clearStudents()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link onClick={this.handleLogoutClick} to='/'> Logout </Link>
            </div>
        );
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link to='/register'> Create an account </Link>
                <Hyph />
                <Link to='/login'> Log in </Link>
            </div>
        );
    }

    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>Hogwarts</Link>
                </h1>
                {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </nav>
        );
    }
}