import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UrgentInformationBox from './../../CommonComponents/UrgentInformationBox'

import { useSelector, useDispatch } from 'react-redux'

import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function MostUrgent () {

  const [data, setData] = useState()
  const [solarFlare, setSolarFlare] = useState()
  const [geomagneticStorm, setGeomagneticStorm] = useState()
  const [notificationsResults, setNotificationsResults] = useState()

  const dateState = useSelector(storeState => storeState)
  console.log(dateState)
  console.log(dateState.dateReducer.today)

  const notificationData = ''


  useEffect(() => {
    const fetchData = async () => {
      const notificationsApiResponse = await axios(
        `https://api.nasa.gov/DONKI/notifications?startDate=${dateState.dateReducer.sevenDaysAgo}&endDate=${dateState.dateReducer.today}&type=all&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4`
        )

      console.log(notificationsApiResponse.data[0])
      notificationData = [...notificationsApiResponse.data[0]] // first notification that comes through

      setNotificationsResults(notificationData)

    }

    fetchData()

  }, [])

  return (
    <div>
      <h1>Notifications</h1>


          <>
            <UrgentInformationBox
              messageType = {notificationData.messageType}
              timeOccurred = {notificationData.messageIssueTime}
              information = {notificationData.messageBody}
            />
          </>

        <Button
            variant='light'
            onClick={() => {

            }}
        >Read More</Button>


    </div>
  )
}

export default MostUrgent