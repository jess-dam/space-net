import React from 'react'
import MarsMostRecent from '../Mars/MarsMostRecent'

import styles from './CSS/HomePage.module.css'


function HomePage () {
  return (
    <div className={styles['home-box']}>
      <div></div>
      <div className={styles['weather-box']}>
        <MarsMostRecent/>
      </div>
    </div>
  )
}

export default HomePage