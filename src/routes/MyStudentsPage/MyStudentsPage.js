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

  handleRemoveStudent = (e) => {
    e.preventDefault();
    const studentId = this.props.id;
  

  fetch(`${config.API_ENDPOINT}/students/${studentId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
      return res.json();
    })
    .then(() => {
      this.context.removeStudent(studentId);
      // allow parent to perform extra behaviour
      this.props.onRemoveStudent(studentId);
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
        <h1 id="my-students-h1">My Students</h1>
        <section id="students">
          {this.context.students.map((student, index) => (
            <section id="student-one">
              {/* <p>Student {index + 1}:</p> */}
              <p>
                Student {index + 1} belongs to the {student.house} House. Their
                pet is an {student.pet}, and their favorite subject is{" "}
                {student.favoritesubject}.
              </p>
              <button className="remove_student" type="button" onClick={this.handleRemoveStudent}>DELETE</button>
            </section>
          ))}
          {/* <section id="student-one">
        <p>Student One:</p>
        <p>Student One belongs to the Gryffindor House. Their pet is an owl, and their favorite subject is Divination.</p>
      </section> */}
          {/* <section id="student-two">
        <p>Student Two:</p>
        <p>Student Two belongs to the Ravenclaw House. Their pet is a cat, and their favorite subject is Transfiguration.</p>
      </section>
      <section id="student-three">
        <p>Student Three:</p>
        <p>Student Three belongs to the Slytherin House. Their pet is a rat, and their favorite subject is Potions.</p>
      </section> */}
        </section>
      </div>
    )
  }
}
