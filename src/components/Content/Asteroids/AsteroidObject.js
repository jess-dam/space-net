import React from 'react'

function AsteroidObject({ data, date }){
    console.log(data, date)
    data.near_earth_objects[`${date}`].map((item) => {
        return(
            <div>
                <h5>{data.near_earth_objects[`${date}`][item].name}</h5>
                <p>Estimated diameter: {data.near_earth_objects[`${date}`][item].estimated_diameter.meters.estimated_diameter_max}</p>
                <p>Hazadous? {data.near_earth_objects[`${date}`][item].is_potentially_hazardous_object}</p>
                {/* <p>Close approach to Earth date: {data.near_earth_objects[`${date}`][`${item}`].close_approach_data.close_approach_date}</p>
                <p>Velocity: {data.near_earth_objects[`${date}`][`${item}`]}</p>
                <p>Missing impact with Earth by: {data.near_earth_objects[`${date}`][`${item}`]}</p> */}
            </div>
        )

    }

    )
}

export default AsteroidObject