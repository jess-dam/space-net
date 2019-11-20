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
      const solarFlareResults = await axios(
        'https://api.nasa.gov/DONKI/FLR?startDate=2019-11-10&endDate=2019-11-20&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setSolarFlare(solarFlareResults.data)
      console.log(solarFlareResults)

      const geomagneticStormResults = await axios(
        'https://api.nasa.gov/DONKI/GST?startDate=2019-11-10&endDate=2019-11-20&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setGeomagneticStorm(geomagneticStormResults.data)
      console.log(geomagneticStormResults)

      const notificationsResults = await axios(
        'https://api.nasa.gov/DONKI/notifications?startDate=2019-11-10&endDate=2019-11-20&type=all&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )

      for (let i = 0; i < 10; i++) {
        const messageBodyArray = notificationsResults.data[i].messageBody.split("##")
        console.log(messageBodyArray)
        messageBodyArray.map(messageItem => {
          if (messageItem.includes("Summary:")) {
            console.log(messageItem + "  __MESSAGE ITEM")
            const summaryItem = messageItem.slice()
            console.log(summaryItem + "  __SUMMARY ITEM")
            setInformationResults([...informationResults, summaryItem])
          }
        })
      }

      setNotificationsResults(notificationsResults.data)
    }   

    fetchData()

  }, [])

  console.log(informationResults)

  return (
    <div>
      <h1>Notifications</h1>
      {
        notificationsResults && notificationsResults.map(notificationResult => (
          <>
            <UrgentInformationBox
              messageType = {notificationResult.messageType}
              timeOccurred = {notificationResult.messageIssueTime}
              // information = {notificationResult.messageBody}
              information = {notificationResult.messageBody.slice(
                notificationResult.messageBody.indexOf("## Summary:") + 11,
                notificationResult.messageBody.indexOf(("##Events"))
              )}
            />
          </>
        ))
      }
    </div>
  )
}

export default Urgent