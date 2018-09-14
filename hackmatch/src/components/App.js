import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewCandidate from './pages/NewCandidate'
import Swipe from './pages/Swipe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">HackMatch</Link>{' '}
          <Link to="/new-candidate">New candidate</Link>{' '}
          <Link to="/swipe">Swipe</Link>{' '}
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-candidate" component={NewCandidate} />
          <Route path="/swipe" component={Swipe} />
        </Switch>
      </div>
    );
  }
}

export default App;
