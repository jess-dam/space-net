import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Mars () {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/insight_weather/?api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4&feedtype=json&ver=1.0'
      )
      setData(results.data)
      console.log(results)
    }
    fetchData()
  }, [])
  return (
    <div>
      WELCOME TO MARS
    </div>
  )
}

export default Mars