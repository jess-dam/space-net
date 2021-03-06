import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsteroidObject from './AsteroidObject'
import AsteroidsDiagram from './AsteroidsDiagram'
import moment from 'moment'



import { useSelector, useDispatch } from 'react-redux'

import styles from '../CSS/Asteroids.module.css'

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
  const [showDetails, setShowDetails] = useState([])


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

  return (
    <div className={styles['wrapper']}>
      <h1>Asteroid Log</h1>

        <div className={styles['two-sectioned']}>
          <div className={styles['diagram-box']}>
            <img src='https://www.washingtonpost.com/resizer/K6RppTqpzgI1ijeg_lHh7-VmDno=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/U3XHF4GQUJGW3JCIPMYMMWL3EE.jpg'
              width='700'
            />
            {/* {
              data && data.near_earth_objects && (
                <AsteroidsDiagram
                  data={data.near_earth_objects}
                />
              )
            } */}
          </div>

        <div className={styles['outer-box']}>
          <h3>Asteroids found over the last 7 days</h3>

          {
            data && data.near_earth_objects && Object.keys(data.near_earth_objects).map(date =>
              <div className={styles['text-box']}>
                  <div className={styles['dates-box']}>
                    <h4>{date}</h4>
                  </div>

                    <div className={styles['details-box']}>
                      <AsteroidObject
                        date={date}
                        data={data.near_earth_objects[`${date}`]}
                        />
                    </div>
                    <br></br>
                    <br></br>

                </div>
              )
            }
          </div>

        // </div>
      // </div>


)
}

export default Asteroids