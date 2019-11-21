import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherTile from './../../CommonComponents/WeatherTile'
import styles from './../CSS/Mars.module.css'

function MarsMostRecent() {
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

  data && data[data.sol_keys[0]] && (console.log(data[data.sol_keys[0]]))

  return (
    <div className={styles['wrapper']}>
        <h3>Most Recent Weather on Mars</h3>
      {
        data && data[data.sol_keys[0]] &&(
            <>
                {/* <h4>Sol {data.sol_keys[0]}</h4> */}
                <WeatherTile
                key={data.sol_keys[0]}
                solString={data.sol_keys[0]}
                data={data}
                />
            </>
        )

      }
    </div>
  )
}

export default MarsMostRecent