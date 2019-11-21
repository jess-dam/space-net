import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UrgentInformationBox from './../../CommonComponents/UrgentInformationBox'

import { useSelector, useDispatch } from 'react-redux'

import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import styles from '../CSS/Urgent.module.css'

function MostUrgent () {

  const [data, setData] = useState()
  const [solarFlare, setSolarFlare] = useState()
  const [geomagneticStorm, setGeomagneticStorm] = useState()
  const [notificationsResults, setNotificationsResults] = useState()

  const dateState = useSelector(storeState => storeState)
  console.log(dateState)
  console.log(dateState.dateReducer.today)

  var notificationData = ''

  const history = useHistory()


  useEffect(() => {
    const fetchData = async () => {
      const notificationsApiResponse = await axios(
        `https://api.nasa.gov/DONKI/notifications?startDate=${dateState.dateReducer.sevenDaysAgo}&endDate=${dateState.dateReducer.today}&type=all&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4`
        )

      console.log(notificationsApiResponse.data[0].messageBody)
      notificationData = notificationsApiResponse.data[0] // first notification that comes through


      let summaryItem = notificationsApiResponse.data[0].messageBody.split("##") // array of split strings
      summaryItem.filter(summaryElement => {
        if (summaryElement.includes("Summary:")) { // searching for summary string in array
          notificationsApiResponse.data[0].messageBody = summaryElement // stripping message to summary
        }
      })

      setNotificationsResults(notificationsApiResponse.data[0])
    }

    fetchData()
    console.log(notificationsResults)

  }, [])

  return (
    <div>
      <h1>Recent News</h1>

          {
            notificationsResults && (
              <UrgentInformationBox
              messageType = {notificationsResults.messageType}
              timeOccurred = {notificationsResults.messageIssueTime}
              information = {notificationsResults.messageBody}
              />
            )

          }
        <Button
            variant='dark'
            onClick={() => {
              history.push('/urgent')
            }}
        >Read More</Button>


    </div>
  )
}

export default MostUrgent