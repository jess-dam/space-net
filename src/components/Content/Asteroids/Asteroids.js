import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsteroidObject from './AsteroidObject'
import moment from 'moment'
import styles from './../CSS/Asteroids.module.css'
import { useSelector, useDispatch } from 'react-redux'

function Asteroids () {
  const [data, setData] = useState(null)
  const asteroidDates = []
  // const dateState = useSelector(storeState => storeState)
  // console.log(dateState)
  // console.log(dateState.today)



  // const today = new Date()
  // let todayStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`
  // const yesterday = moment().tz('America/New_York').format()
  // console.log(yesterday)

  var moment = require('moment');

  const dateState = useSelector(storeState => storeState)

  console.log(dateState)
  console.log(dateState.dateReducer.today)



  useEffect(() => {
    const fetchData = async () => {

      const results = await axios(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateState.dateReducer.sevenDaysAgo}&end_date=${dateState.dateReducer.today}&api_key=Enoih2fwvokMm0hHR3AwXnV4vw1I3tamZ6GBM5O4`
      )
      setData(results.data)
      console.log(results)
      for(let date in results.data.near_earth_objects){
        asteroidDates.push(date)
      }

      // console.log(asteroidDates)
    }
    fetchData()
  }, [])

  // data && data.near_earth_objects && (console.log(data.near_earth_objects[`2019-11-17`][0].name))
  return (
    <div className={styles['wrapper']}>
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