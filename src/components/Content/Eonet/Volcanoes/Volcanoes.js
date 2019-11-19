import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styles from './../../CSS/Eonet.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

function Volcanoes () {
  const [data, setData] = useState(null)
  const [numberOfEvents, setNumberOfEvents] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/12'
      )
      setData(results.data)
      console.log(results)
      const tempArr = []
      for ( let i = 0; i < results.data.events.length; i ++) {
        tempArr.push(i)
      }
      setNumberOfEvents(tempArr)
    }
    fetchData()

  }, [])

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2Vwc2FyIiwiYSI6ImNrMzV1cDBlaTBtZTMzY3BlMGtxZHgxbDgifQ.BAO2QYMsaX-CmTanG19_GQ'
  });

  return (
    <div>
      <div className={styles['map-wrapper']}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      > 
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          {
            data && numberOfEvents && numberOfEvents.map(event =>
              <Feature 
                key={event}
                coordinates={[data.events[event].geometries['0'].coordinates[0], data.events[event].geometries['0'].coordinates[1]]}
              />
            )
          }
        </Layer>   
      </Map>
      </div>
    </div>
  )
}

export default Volcanoes