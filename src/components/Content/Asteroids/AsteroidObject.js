import React from 'react'
import styles from '../CSS/Asteroids.module.css'

function AsteroidObject({ data, date }){
    const [showAsteroids, setShowAsteroids] = React.useState(false)
    // console.log(data, date)
    return(
        <>
            {
                (data && showAsteroids)? (
                    <>
                    <a className={styles['toggle-show']} onClick={() => {setShowAsteroids(false)}}>Click here to hide asteroids</a>
                        {
                            data.map((item) =>
                                <div>
                                    <br></br>
                                    <br></br>
                                    <h5>Name: {item.name}</h5>
                                    <p>Estimated diameter: {Math.round(item.estimated_diameter.meters.estimated_diameter_max)}km</p>
                                    <p>Hazadous? {`${item.is_potentially_hazardous_asteroid}`}</p>
                                    <p>Close approach to Earth date: {item.close_approach_data.close_approach_date}</p>
                                    <p>Velocity: {Math.round(item.close_approach_data[0].relative_velocity.kilometers_per_hour)}km/h</p>
                                    {/* <p>Missing impact with Earth by: {data.close_approach_data[0].miss_distance.kilometers}</p> */}
                                    <br></br>
                                </div>
                            )
                        }
                    </>
                    )
                :

                <a className={styles['toggle-show']} onClick={() => {setShowAsteroids(true)}}>Click here to see asteroids</a>
            }

        </>



    )
}

export default AsteroidObject