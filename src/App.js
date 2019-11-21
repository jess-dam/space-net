import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/Content/HomePage/HomePage'
import Mars from './components/Content/Mars/Mars'
import Asteroids from './components/Content/Asteroids/Asteroids'
import Urgent from './components/Content/Urgent/Urgent'
import Apod from './components/Content/Apod/Apod'
import Eonet from './components/Content/Eonet/Eonet'
import LandingPage from './components/LandingPage/LandingPage'



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><LandingPage /></Route>
          <Route path="/homePage"><Navbar /><HomePage /></Route>
          <Route path="/mars"><Navbar /><Mars /></Route>
          <Route path="/asteroids"><Navbar /><Asteroids /></Route>
          <Route path="/urgent"><Navbar /><Urgent /></Route>
          <Route path="/apod"><Navbar /><Apod /></Route>
          <Route path="/eonet"><Navbar /><Eonet /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
