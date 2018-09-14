import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'

class NewCandidate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Noelia",
      surname: "Leon",
      picUrl: "https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif",
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      isLoading: true
    }, () => {
      axios.post("http://localhost:8000/candidates", {
        name: this.state.name,
        surname: this.state.surname,
        picUrl: this.state.picUrl,
        numberOfLikes: 0,
        numberOfNexts: 0
      })
        .then(response => {
          this.props.history.push('/')
        })
    })
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="NewCandidate">
          <h1>New candidate</h1>
          <p>Loading...</p>
        </div>
      )
    }
    return (
      <div className="NewCandidate">
        <h1>New candidate</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange} />
          <br />
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange} />
          <br />
          <label>Picture:</label>
          <input
            type="text"
            name="picUrl"
            value={this.state.picUrl}
            onChange={this.handleChange} />
          <br />
          <button>Create candidate!</button>
        </form>
      </div>
    );
  }
}

export default NewCandidate;
