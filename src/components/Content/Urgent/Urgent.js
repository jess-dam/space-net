import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UrgentInformationBox from './../../CommonComponents/UrgentInformationBox'

function Urgent () {
  const [data, setData] = useState()
  const [solarFlare, setSolarFlare] = useState()
  const [geomagneticStorm, setGeomagneticStorm] = useState()
  const [notificationsResults, setNotificationsResults] = useState()


  useEffect(() => {
    const fetchData = async () => {
      const solarFlareResults = await axios(
        'https://api.nasa.gov/DONKI/FLR?startDate=2019-11-10&endDate=2019-11-17&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setSolarFlare(solarFlareResults.data)
      console.log(solarFlareResults)

      const geomagneticStormResults = await axios(
        'https://api.nasa.gov/DONKI/GST?startDate=2019-11-10&endDate=2019-11-17&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setGeomagneticStorm(geomagneticStormResults.data)
      console.log(geomagneticStormResults)

      const notificationsResults = await axios(
        'https://api.nasa.gov/DONKI/notifications?startDate=2019-11-10&endDate=2019-11-17&type=all&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setNotificationsResults(notificationsResults.data)
      // console.log(notificationsResults)
      // console.log(notificationsResults.data)
      // console.log(notificationsResults.data[0])
      // console.log(notificationsResults.data[0].messageType)
      // console.log(typeof notificationsResults.data[0].messageType)
      // console.log(notificationsResults.data[0].messageIssueTime)
      // console.log((notificationsResults.data[0].messageBody).split("Summary"))
      // console.log(notificationsResults.data[0].messageID)
    }
    fetchData()
  }, [])

  console.log(notificationsResults)
  notificationsResults && notificationsResults[0] && notificationsResults[0].messageType && (
    console.log("MESSAGETYPE"+notificationsResults[0].messageType + "INFORMATION" + notificationsResults[0].messageBody
    + "SUMMARY INDEX" + notificationsResults[0].messageBody.indexOf("## Summary:") + "EVENTS INDEX" + 
    notificationsResults[0].messageBody.indexOf("##Events")
    )
  )
  
  const findIndices = (notificationsResults) {
    
  }

  return (
    <div>
      {
        notificationsResults && notificationsResults[0] && notificationsResults[0].messageID &&
        notificationsResults[0].messageType && (
          <div>
            <h1>aaa</h1>
            <UrgentInformationBox
              key = {notificationsResults[0].messageID}
              messageType = {notificationsResults[0].messageType}
              timeOccurred = {notificationsResults[0].messageIssueTime}
              information = {((notificationsResults[0].messageBody).slice(
                (notificationsResults[0].messageBody.indexOf("## Summary:") + 1),
                notificationsResults[0].messageBody.indexOf("##Events")
              ))}
            />
          </div>
        )
      }
    </div>
  )
}

export default Urgent