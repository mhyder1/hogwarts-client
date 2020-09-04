import React from "react"
import "./LoginPage.css"
import Header from '../../components/Header/Header'
import NavBar from '../../components/Nav/NavBar'
import LoginForm from '../../components/LoginForm/LoginForm'



export default class LoginPage extends React.Component {
 render() {
    return (
      <div>
        <Header />
        <NavBar />
        <LoginForm />
      </div>
    )
  }
}







