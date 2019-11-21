import React from 'react'
import styles from './CSS/Urgent.module.css'

function UrgentInformationBox ({ messageType, timeOccurred,
  information }) {

  return (

    <div
      className={styles['wrapper']}
    >

      <h1
        id = {styles['notificationTitle']}
      >
        Notifications
      </h1>

      <p
        className = {styles['notificationElement']}
      >
        Message type: {messageType}
      </p>

      <p
        className = {styles['notificationElement']}
      >
        Time occurred: {timeOccurred}
      </p>

      <p
        className = {styles['notificationElement']}
      >
        Information: {information}
      </p><br  />

    </div>

  )

}

export default UrgentInformationBox