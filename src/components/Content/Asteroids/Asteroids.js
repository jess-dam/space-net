import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsteroidObject from './AsteroidObject'

function Asteroids () {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-11-10&end_date=2019-11-17&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setData(results.data)
      console.log(results)
    }
    fetchData()
  }, [])

  data && data.near_earth_objects && (console.log(data.near_earth_objects[`2019-11-17`][0].name))
  return (
    <div>
      {
        data && data.near_earth_objects && Object.keys(data.near_earth_objects).map(date =>
          <>
            <h1>{date}</h1>
            <AsteroidObject
              date={date}
              data={data.near_earth_objects[`${date}`]}
            />
          </>
        )
      }
      </div>


  )
}

export default Asteroids