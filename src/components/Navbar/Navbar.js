import React, { useState, useEffect } from 'react'
import {
  Link
} from "react-router-dom";
import styles from './CSS/Navbar.module.css'
import classNames from "classnames"
import './CSS/Navbar.css'

function Navbar () {
  const [state, setState] = useState({
    prevScrollPos: window.pageYOffset,
    visible: true
  })

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    const prevScrollPos = state.prevScrollPos;
    const currentScrollPos = window.pageYOffset;
    console.log(prevScrollPos)
    console.log(currentScrollPos)
    console.log(state)
    const visible = prevScrollPos > currentScrollPos;

    setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  let btnClass = classNames('navbar',{
    'navbar--hidden': !state.visible
  });
//try to set how far we hide the navbar with regards to the scroll position
  return (
    <div className={styles['body']}>
      <div className={styles['logo-wrapper']}>
       <Link className={styles['logo']} to="/homePage"><p></p></Link>
      </div>
      <div className={btnClass}>
        <Link to="/homePage">
          <h4>HomePage</h4>
        </Link>
        <Link to="/mars">
          <h4>Mars</h4>
        </Link>
        <Link to="/asteroids">
          <h4>Asteroids</h4>
        </Link>
        <Link to="/urgent">
          <h4>Urgent</h4>
        </Link>
        <Link to="/apod">
          <h4>Apod</h4>
        </Link>
        <Link to="/eonet">
          <h4>Eonet</h4>
        </Link>
      </div>
    </div>
  )
}

export default Navbar