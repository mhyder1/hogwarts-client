import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css'
import LandingPage from '../routes/LandingPage/LandingPage.js'
import CreatePage from '../routes/CreatePage/CreatePage.js'
import MyStudentsPage from '../routes/MyStudentsPage/MyStudentsPage.js'
import AppContext from '../contexts/context'
import config from "../config"



class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/students`)
    .then(res => res.json())
    .then(students => {
      this.setState({students})
    })
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
      randomizeHouse: this.randomizeHouse
    }
    return (
      <AppContext.Provider value={value}>
      <div className='App'>
        <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route path = '/create-student' component ={CreatePage}/>
        <Route path = '/my-students' component ={MyStudentsPage}/>
        </Switch>
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;