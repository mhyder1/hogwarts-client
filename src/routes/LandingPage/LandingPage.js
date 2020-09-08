import React from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import NavBar from '../../components/Nav/NavBar'


const LandingPage = (props) => {
  const handleStart = () => {
    const {history} = props 
    history.push('./login')
  }

  return (
    <div>
      <Header />
      <NavBar />
        <p>Experience the magic of preparing for your first year of Hogwarts School of Witchcraft and Wizardry! Choose your wand, your pet, and get sorted! The journey begins...</p>
       <button onClick={() => handleStart()}>HERE</button>
    </div>
    )
  }


export default LandingPage
