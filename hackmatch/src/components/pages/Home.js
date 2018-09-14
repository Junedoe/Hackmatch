import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: null
    }
  }
  render() {
    if (!this.state.candidates) {
      return (
        <div className="Home">
          <h1>All candidates</h1>
          Loading...
        </div>
      );
    }

    return (
      <div className="Home">
        <h1>All candidates</h1>
        {this.state.candidates.map(c => (
          <div>
            <img src={c.picUrl} style={{ height: 50, width: 50, objectFit: "cover" }} />
            {c.name}
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:8000/candidates?_sort=id&_order=desc')
      .then(response => {
        this.setState({
          candidates: response.data
        })
      })
  }
}

export default Home;
