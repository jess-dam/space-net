import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Apod () {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/planetary/apod?api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4'
      )
      setData(results.data)
      console.log(results)
    }
    fetchData()
  }, [])
  return (
    <div>
      WELCOME TO Apod
    </div>
  )
}

export default Apod