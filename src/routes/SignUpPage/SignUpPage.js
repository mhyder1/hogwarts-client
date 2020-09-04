import React from "react"
import "./SignUpPage.css"
import Header from "../../components/Header/Header"
import NavBar from "../../components/Nav/NavBar"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <SignUpForm />
      </div>
    )
  }
}
