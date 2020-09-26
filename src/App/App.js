import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css'
import Header from '../components/Header/Header'
import PrivateRoute from '../components/Utils/PrivateRoute'
import PublicOnlyRoute from '../components/Utils/PublicOnlyRoute';
import LoginPage from '../routes/LoginPage/LoginPage'
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage'
import LandingPage from '../routes/LandingPage/LandingPage.js'
import CreatePage from '../routes/CreatePage/CreatePage.js'
import MyStudentsPage from '../routes/MyStudentsPage/MyStudentsPage.js'
import AppContext from '../contexts/context'
import config from "../config"
import TokenService from '../services/token-service'



class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    this.getStudents()
    // console.log('mounting')
    // if(TokenService.hasAuthToken()) {
    //   const id = TokenService.readJwtToken().user_id
    //   console.log(id)
    //   fetch(`${config.API_ENDPOINT}/students/users/${id}`)
    //   .then(res => res.json())
    //   .then(students => {
    //     this.setState({students})
    //   })
    // }
  }
  
  getStudents = () => {
    if(TokenService.hasAuthToken()) {
      const id = TokenService.readJwtToken().user_id
      console.log(id)
      fetch(`${config.API_ENDPOINT}/students/users/${id}`)
      .then(res => res.json())
      .then(students => {
        this.setState({students})
      })
    }
  }

  clearStudents = () => {
    this.setState({students:[]})
  }

  addStudent = (student) => {
    this.setState({
      students: [...this.state.students, student]
    });
  };

  removeStudent = (studentId) => {
    this.setState({
      students: this.state.students.filter(student => student.id !== studentId),
    });
  };

  render() {
    const value = {
      students: this.state.students, 
      addStudent: this.addStudent,
      removeStudent: this.removeStudent,
      randomizeHouse: this.randomizeHouse,
      clearStudents: this.clearStudents,
      getStudents: this.getStudents,
    }
    return (
      <AppContext.Provider value={value}>
      <div className='App'>
        {/* <header className='App__header'>
          <Route component={Header}/>
        </header> */}
        <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <PublicOnlyRoute path={'/login'} component={LoginPage}/>
        <PublicOnlyRoute path={'/register'} component={RegistrationPage}/>
        <PrivateRoute path = '/create-student' component ={CreatePage}/>
        <PrivateRoute path = '/my-students' component ={MyStudentsPage}/>
        </Switch>
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;