import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GoogleMapReact from 'google-map-react'
import styles from './../CSS/Eonet.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

function Eonet () {
  const [data, setData] = useState(null)
  const [map, setMap] = useState({
    center: {
      lat: 16,
      lng: 29
    },
    zoom: 1
  })
  const [numberOfEvents, setNumberOfEvents] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8'
      )
      setData(results.data)
      console.log(results.data.events['0'].geometries['0'].coordinates[0])
      console.log(results)
      const tempArr = []
      for ( let i = 0; i < results.data.events.length; i ++) {
        tempArr.push(i)
        console.log(i)
      }
      setNumberOfEvents(...tempArr)
    }
    fetchData()
    console.log(numberOfEvents)
  }, [numberOfEvents])

  // const listOfEvents = data.events.map(event => 
  //   <FontAwesomeIcon icon={faFire} lat={data.events.event.geometries['0'].coordinates[0]} lng={data.events.event.geometries['0'].coordinates[1]}/>
  //   )

  return (
    <div>
      <div className={styles['map-wrapper']}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAUKcwGohmhzUU4n9DO46RbhbwLdR6_1ds' }}
          defaultCenter={map.center}
          defaultZoom={map.zoom}
        >
          {
            numberOfEvents && numberOfEvents.map(event => 
              <FontAwesomeIcon icon={faFire} lat={data.events[event].geometries['0'].coordinates[0]} lng={data.events[event].geometries['0'].coordinates[1]}/>
            )
          }
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Eonet