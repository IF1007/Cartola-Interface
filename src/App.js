import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import MyProfile from './components/MyProfile'; 

class App extends Component {
  render() {
  return <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/myProfile" component={MyProfile}/>
    </div>
  </Router>
  }
}

export default App;
