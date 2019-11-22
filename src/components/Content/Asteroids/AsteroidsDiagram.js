import React from 'react'
import styles from '../CSS/Asteroids.module.css'

function AsteroidsDiagram({ data }){
    console.log(data)
    console.log(Math.round(( Date.now() - parseInt(data['2019-11-17'][0].close_approach_data[0].epoch_date_close_approach) ) / 2000000))
    return(
        <>
            <h2>Diagram</h2>
            <svg>
                {
                    Object.keys(data).map(date =>
                        data[`${date}`].map(asteroid =>
                            <>
                                <circle
                                    cx={`${Math.round((Date.now() - parseInt(asteroid.close_approach_data[0].epoch_date_close_approach)) / 20000)}`}
                                    cy={`${Math.round(parseInt(asteroid.close_approach_data[0].miss_distance.kilometers) / 50000000)}`}
                                    r={`${Math.round(parseInt(asteroid.estimated_diameter.kilometers.estimated_diameter_max) / 50)}`}
                                    fill="grey" />
                            </>
                        )
                    )
                }
                {/* <circle cx="50" cy="50" r="40" fill="grey" /> */}
            </svg>
            <div className={styles['earth']}></div>
        </>
    )
}


export default AsteroidsDiagram