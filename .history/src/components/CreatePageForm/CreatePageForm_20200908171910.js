import React from "react"
import AppContext from "../../contexts/context"


export default class CreatePageForm extends React.Component {
  state = {
    pronouns: "",
    pet: "",
    wandType: "",
    wandCore: "",
    favoriteSubject: "",
  }

  static contextType = AppContext

  handleSubmit = (event) => {
    event.preventDefault()
    const { pronouns, pet, wandType, wandCore, favoriteSubject } = this.state
    const newStudent = {
      pronouns,
      pet,
      wandType,
      wandCore,
      favoriteSubject,
    }

    fetch(`http://localhost:8000/students`,
		{
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: newStudent	
		})
		
		.then(res => {
			if (!res.ok)
				return res.json().then(e => Promise.reject(e))
			return res.json()
		})
		.then(response => this.context.addFolder(response))
		.then(
			this.props.history.push('/')
		)
		.catch(error => {
			alert(error.message)
		})
    
    this.context.addStudent(newStudent)
    // call to database
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.context)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your student's preferred pronouns:
          <br />
          <select name="pronouns" onChange={this.handleChange} required>
            <option value="">select</option>
            <option value="she-her">She/Her</option>
            <option value="he-him">He/Him</option>
            <option value="they-them">They/Them</option>
          </select>
        </label>

        <br />
        <br />
        <label>
          Choose a pet:
          <br />
          <select name="pet" onChange={this.handleChange} required>
            <option value="">select</option>
            <option value="owl">Owl</option>
            <option value="cat">Cat</option>
            <option value="toad">Toad</option>
          </select>
        </label>

        <br />
        <br />
        <label>
          Choose your wand type:
          <br />
          <select name="wandType" onChange={this.handleChange} required>
            <option value="">select</option>
            <option value="birch">Birch</option>
            <option value="ash">Ash</option>
            <option value="alder">Alder</option>
            <option value="willow">Willow</option>
            <option value="oak">Oak</option>
            <option value="holly">Holly</option>
            <option value="hazel">Hazel</option>
            <option value="ivy">Ivy</option>
          </select>
        </label>

        <br />
        <br />
        <label>
          Choose your wand core:
          <br />
          <select name="wandCore" onChange={this.handleChange} required>
            <option value="">select</option>
            <option value="unicorn">Unicorn</option>
            <option value="dragon">Dragon</option>
            <option value="phoenix">Phoenix</option>
          </select>
        </label>

        <br />
        <br />
        <label>
          Choose a favorite subject:
          <br />
          <select name="favoriteSubject" onChange={this.handleChange} required>
            <option value="">select</option>
            <option value="transfiguration">Transfiguration</option>
            <option value="charms">Charms</option>
            <option value="potions">Potions</option>
            <option value="history">History of Magic</option>
            <option value="defense">Defense Against the Dark Arts</option>
            <option value="astronomy">Astronomy</option>
            <option value="herbology">Herbology</option>
            <option value="flying">Flying</option>
            <option value="divination">Divination</option>
            <option value="magical-creatures">Care of Magical Creatures</option>
          </select>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
