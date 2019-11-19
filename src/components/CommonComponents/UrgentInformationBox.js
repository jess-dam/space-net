import React from 'react'

function UrgentInformationBox ({ notificationsResults, messageType, timeOccurred, information }) {

    return (

        <>

            <p>Message type: {messageType}</p>
            <p>Time occurred: {timeOccurred}</p>
            <p>Information: {information}</p><br  />

        </>

    )

}

export default UrgentInformationBox