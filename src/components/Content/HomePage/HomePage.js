import React from 'react'
import MarsMostRecent from '../Mars/MarsMostRecent'
import MostUrgent from '../Urgent/MostUrgent'

import styles from './CSS/HomePage.module.css'


function HomePage () {
  return (
    <div className={styles['home-box']}>
      <div className={styles['news-box']}>
        <MostUrgent/>
      </div>

      <div className={styles['mars-weather']}>
        <MarsMostRecent/>
      </div>
    </div>
  )
}

export default HomePage