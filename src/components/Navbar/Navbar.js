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