import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
  return (
    <div>
      WELCOME TO Asteroids
    </div>
  )
}

export default Asteroids