import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/Content/LandingPage/LandingPage'
import Mars from './components/Content/Mars/Mars'
import Asteroids from './components/Content/Asteroids/Asteroids'
import Urgent from './components/Content/Urgent/Urgent'
import Apod from './components/Content/Apod/Apod'
import Eonet from './components/Content/Eonet/Eonet'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/landingPage"><LandingPage /></Route>
          <Route path="/mars"><Mars /></Route>
          <Route path="/asteroids"><Asteroids /></Route>
          <Route path="/urgent"><Urgent /></Route>
          <Route path="/apod"><Apod /></Route>
          <Route path="/eonet"><Eonet /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
