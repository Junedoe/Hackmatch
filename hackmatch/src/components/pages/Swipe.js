import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'

class Swipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidate: null
    }
  }
  handleClick(type) {
    let url = 'http://localhost:8000/candidates/' + this.state.candidate.id
    let data
    if (type === 'like')
      data = { numberOfLikes: this.state.candidate.numberOfLikes + 1 }
    else
      data = { numberOfNexts: this.state.candidate.numberOfNexts + 1 }
    axios.patch(url, data)
      .then(response => {
        this.getCandidateAndSaveItInTheState()
      })
  }
  render() {
    if (!this.state.candidate) {
      return (
        <div className="Swipe" style={{ textAlign: "center" }}>
          <h1>Swipe</h1>
          Loading...
        </div>
      );
    }

    return (
      <div className="Swipe" style={{ textAlign: "center" }}>
        <h1>Swipe</h1>
        <img src={this.state.candidate.picUrl} style={{ height: 200, width: 200, objectFit: "cover" }} />
        <br />
        {this.state.candidate.name}
        <br />
        <button onClick={e => this.handleClick('like')}>Like</button>
        {' '}
        <button onClick={e => this.handleClick('next')}>Next</button>
      </div>
    );
  }

  componentDidMount() {
    this.getCandidateAndSaveItInTheState()
  }

  getCandidateAndSaveItInTheState() {
    axios.get('http://localhost:8000/candidates')
      .then(response => {
        let randomIndex = Math.floor(Math.random() * response.data.length)
        this.setState({
          candidate: response.data[randomIndex]
        })
      })
  }
}

export default Swipe;
