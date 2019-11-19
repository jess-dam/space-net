import React from 'react'

function UrgentInformationBoxes ({ notificationsResults, messageType, timeOccurred, information }) {

    return (

        <>
        
            <h1>Notifications</h1>

            {
                notificationsResults && notificationsResults[0] &&
                notificationsResults[0].messageID && (
                    <>
                        <h2>Message type: {messageType}</h2>
                        <h2>Time occurred: {timeOccurred}</h2>
                        <h2>Information: {information}</h2>
                    </>
                )
            }

        </>

    )

}

export default UrgentInformationBoxes