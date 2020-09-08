import React from "react"
import "./MyStudentsPage.css"
import Header from "../../components/Header/Header"
import NavBar from "../../components/Nav/NavBar"
import AppContext from "../../contexts/context"

export default class MyStudentsPage extends React.Component {
  static contextType = AppContext

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
                {student.favoriteSubject}.
              </p>
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
