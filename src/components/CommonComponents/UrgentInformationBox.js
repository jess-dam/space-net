import React from 'react'

function UrgentInformationBox ({ notificationsResults, messageType, timeOccurred, information }) {

    return (

        <>

            <h2>Message type: {messageType}</h2>
            <h2>Time occurred: {timeOccurred}</h2>
            <h2>Information: {information}</h2><br  />

        </>

    )

}

export default UrgentInformationBox