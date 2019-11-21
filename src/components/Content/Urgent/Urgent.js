import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UrgentInformationBox from './../../CommonComponents/UrgentInformationBox'

import { useSelector } from 'react-redux'

function Urgent () {

  const [notificationsResults, setNotificationsResults] = useState()

  const dateState = useSelector(storeState => storeState)

  useEffect(() => {
    const fetchData = async () => {
      const notificationsApiResponse = await axios(
        `https://api.nasa.gov/DONKI/notifications?startDate=${dateState.dateReducer.sevenDaysAgo}&endDate=${dateState.dateReducer.today}&type=all&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4`
      )

      const notificationData = [...notificationsApiResponse.data] // entire notification array of objects

      notificationData.map(notification => {
        let summaryItem = notification.messageBody.split("##") // array of split strings
        summaryItem.filter(summaryElement => {
          if (summaryElement.includes("Summary:")) { // searching for summary string in array
            notification.messageBody = summaryElement // stripping message to summary
          }
        })
      })

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