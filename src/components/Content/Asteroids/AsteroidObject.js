import React from 'react'

function AsteroidObject({ data, date }){
    console.log(data, date)
    return(
        <>
            {
                data && (
                    // <p>hello</p>
                    // <p>{data[0].name}</p>
                    data.map((item) =>
                        <div>
                            <h5>{item.name}</h5>
                            <p>Estimated diameter: {Math.round(item.estimated_diameter.meters.estimated_diameter_max)}km</p>
                            <p>Hazadous? {`${item.is_potentially_hazardous_asteroid}`}</p>
                            <p>Close approach to Earth date: {item.close_approach_data.close_approach_date}</p>
                            <p>Velocity: {Math.round(item.close_approach_data[0].relative_velocity.kilometers_per_hour)}km/h</p>
                            {/* <p>Missing impact with Earth by: {data.close_approach_data[0].miss_distance.kilometers}</p> */}
                            <br></br>
                        </div>
                    )

                )
            }
        </>



    )
}

export default AsteroidObject