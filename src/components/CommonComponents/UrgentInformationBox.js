import React from 'react'
import styles from './CSS/Urgent.module.css'

function UrgentInformationBox ({ messageType, timeOccurred,
  information }) {

    let notificationDate = timeOccurred.slice(0,10)
    let notificationTime = timeOccurred.slice(11,16)

  return (

    <div
      className={styles['wrapper']}
    >

      <h1
        id = {styles['notificationTitle']}
      >
        Message received on {notificationDate}
      </h1>

      <p
        className = {styles['notificationElement']}
      >
        Message type: {messageType}
      </p>

      <p
        className = {styles['notificationElement']}
      >
        Time occurred: {notificationTime}
      </p>

      <p
        className = {styles['notificationElement']}
      >
        {information}
      </p><br  />

    </div>
  )

}

export default UrgentInformationBox