import React from 'react'
import {
  Link
} from "react-router-dom";
import styles from './CSS/Navbar.module.css'

function Navbar () {
  return (
    <div className={styles['body']}>
      <div className={styles['logo-wrapper']}>
      <Link className={styles['logo']} to="/homePage"><p></p></Link>
      </div>
      <div className={styles['navbar']}>
      <Link to="/homePage">
        <p>HomePage</p>
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
    </div>
  )
}

export default Navbar