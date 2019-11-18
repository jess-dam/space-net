import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Urgent () {
  const [data, setData] = useState(null)
  const [solarFlare, setSolarFlare] = useState(null)
  const [geomagneticStorm, setGeomagneticStorm] = useState(null)
  const [notifications, setNotifications] = useState(null)


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
      setNotifications(notificationsResults.data)
      console.log(notificationsResults)
    }
    fetchData()
  }, [])
  return (
    <div>
      WELCOME TO Urgent
    </div>
  )
}

export default Urgent