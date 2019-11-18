import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherTile from './../../CommonComponents/WeatherTile'
import styles from './../CSS/Mars.module.css'

function Mars () {
  const [data, setData] = useState()
  const [helper, setHelper] = useState()
    useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://api.nasa.gov/insight_weather/?api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4&feedtype=json&ver=1.0'
      )
      setData(results.data)
      console.log(results.data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles['wrapper']}>
      {
        data && data.sol_keys.map(sol =>
          <WeatherTile
            key={sol}
            solString={sol}
            data={data}
          />
          )
      }
    </div>
  )
}

export default Mars