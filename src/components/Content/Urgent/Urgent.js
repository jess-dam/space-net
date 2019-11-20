import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UrgentInformationBox from './../../CommonComponents/UrgentInformationBox'

function Urgent () {

  const [data, setData] = useState()
  const [solarFlare, setSolarFlare] = useState()
  const [geomagneticStorm, setGeomagneticStorm] = useState()
  const [notificationsResults, setNotificationsResults] = useState()
  const [informationResults, setInformationResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const notificationsApiResponse = await axios(
        'https://api.nasa.gov/DONKI/notifications?startDate=2019-11-10&endDate=2019-11-20&type=all&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )

      const notificationData = [...notificationsApiResponse.data]
      Array.isArray(notificationData)

      notificationData.map(notification => {
        let summaryItem = notification.messageBody.split("##")
        summaryItem.filter(summaryElement => {
          if (summaryElement.includes("Summary:")) {
            notification.messageBody = summaryElement
            console.log(notification.messageBody)
          }
        })
      })

      console.log(notificationData)

      setNotificationsResults(notificationData)

    }   

    fetchData()

  }, [])

  return (
    <div>
      <h1>Notifications</h1>
    
      {
        notificationsResults && notificationsResults.map(notificationData => (
          <>
            <UrgentInformationBox
              messageType = {notificationData.messageType}
              timeOccurred = {notificationData.messageIssueTime}
              information = {notificationData.messageBody}
            />
          </>
        ))
      }
    </div>
  )
}

export default Urgent