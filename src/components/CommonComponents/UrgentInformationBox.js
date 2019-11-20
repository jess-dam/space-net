import React from 'react'

function UrgentInformationBox ({ messageType, timeOccurred, information }) {

    return (

        <>

            <p>Message type: {messageType}</p>
            <p>Time occurred: {timeOccurred}</p>
            <p>Information: {information}</p><br  />

        </>

    )

}

export default UrgentInformationBox