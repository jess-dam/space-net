import React from 'react'
import {
  Link
} from "react-router-dom";

function Navbar () {
  return (
    <div>
      <Link to="/landingPage">
        <p>LandingPage</p>
      </Link>
      <Link to="/mars">
        <p>Mars</p>
      </Link>
      <Link to="/asteroids">
        <p>Asteroids</p>
      </Link>
      <Link to="/urgent">
        <p>Urgent</p>
      </Link>
      <Link to="/apod">
        <p>Apod</p>
      </Link>
      <Link to="/eonet">
        <p>Eonet</p>
      </Link>
    </div>
  )
}

export default Navbar