import React from "react"
import "./MyStudentsPage.css"
import config from "../../config"
import Header from "../../components/Header/Header"
import NavBar from "../../components/Nav/NavBar"
import AppContext from "../../contexts/context"


export default class MyStudentsPage extends React.Component {
  static defaultProps = {
    onRemoveStudent: () => {},
  };
  
  static contextType = AppContext

  componentDidMount() {
    this.context.getStudents()
  }

  handleRemoveStudent = (e, id) => {
    e.preventDefault();
    const studentId = id;
  
  fetch(`${config.API_ENDPOINT}/students/${studentId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(() => {
      this.context.removeStudent(studentId);
      // allow parent to perform extra behaviour
      // this.props.onRemoveStudent(studentId);
    })
    .catch((error) => {
      console.error({ error });
    });
  };


    render() {
    return (
      <div>
        <Header />
        <NavBar />
        <section className="my-students">
        <h1 className="my-students-h1">My Students</h1>
        <section id="students">
          {this.context.students.map((student, index) => (
            <section id="student-one" key={index}>
              {/* <p>Student {index + 1}:</p> */}
              <p>
                Student {index + 1} belongs to the {student.house} House. Their
                pet is {['a','e','i','o','u'].includes(student.pet[0]) ? 'an' : 'a'} {student.pet}, and their favorite subject is{" "}
                {student.favoritesubject}. 
              </p>
              <button className="remove_student" type="button" onClick={(e) => this.handleRemoveStudent(e, student.id)}>DELETE</button>
            </section>
          ))}
        </section>
        </section>
      </div>
    )
  }
}